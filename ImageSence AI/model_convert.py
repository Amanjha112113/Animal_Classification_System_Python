import tensorflowjs as tfjs
from tensorflow.keras.applications.mobilenet_v2 import MobileNetV2

## Load the pre-trained MobileNetV2 model
model = MobileNetV2(weights='imagenet')
