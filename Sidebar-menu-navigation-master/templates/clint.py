import socket
import cv2
import pickle
import struct
from flask import Flask, render_template, Response
import cv2
import numpy as np
app = Flask(__name__)


def video_from_server():
    client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    # host_ip = "192.168.211.156"
    host_ip = "192.168.56.1"
    port = 9999
    client_socket.connect((host_ip, port))

    data = b""
    metadata_size = struct.calcsize("Q")
    while True:
        try:
            while len(data) < metadata_size:
                packet = client_socket.recv(4 * 1024)
                if not packet:
                    break
                data += packet

            if not data:
                break

            packed_msg_size = data[:metadata_size]
            data = data[metadata_size:]
            msg_size = struct.unpack("Q", packed_msg_size)[0]

            while len(data) < msg_size:
                data += client_socket.recv(4 * 1024)

            frame_data = data[:msg_size]
            data = data[msg_size:]
            frame = pickle.loads(frame_data)
            _, buffer = cv2.imencode('.jpg', frame)
            frame = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')
            # cv2.imshow("Receiving Video ", frame)
            # key = cv2.waitKey(10)

            # if key == 13:
            #     break

        except Exception as e:
            print(f"Error: {e}")
            return "error"

def generate_frames():
    while True:
        frame = video_from_server()
        print(type(frame))
        # if not success:
        #     break
        # else:
        if isinstance(frame, np.ndarray):
            _, buffer = cv2.imencode('.jpg', frame)
            frame = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')
        # else:
        #     continue
        #     # Encode the frame as JPEG
        # _, buffer = cv2.imencode('.jpg', frame)
        # frame = buffer.tobytes()
        # yield (b'--frame\r\n'
        #        b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

@app.route('/')
def index():
    return render_template('html.html')

@app.route('/video_feed')
def video_feed():
    return Response(video_from_server(), mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__== 'main':
    app.run(debug=True)

#
    # client_socket.close()
    # cv2.destroyAllWindows(
