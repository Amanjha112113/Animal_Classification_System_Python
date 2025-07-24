import tensorflowjs as tfjs
from tensorflow.keras.applications.mobilenet_v2 import MobileNetV2

## Load the pre-trained MobileNetV2 model
model = MobileNetV2(weights='imagenet')

'''
flask==2.3.3
gunicorn==22.0.0
tensorflow-macos==2.15.0
tensorflowjs==4.17.0
flask-cors==4.0.0
'''