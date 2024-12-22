from pynput.mouse import Button, Controller
import time

time.sleep(2)
x, y = 0, 213
mouse = Controller()

for _ in range(50):
    mouse.position = (x, y)
    mouse.press(Button.left)
    x = 1080
    time.sleep(0.05)
    mouse.position = (x, y)
    x = 0
    y += 1
    time.sleep(0.05)
    mouse.release(Button.left)
    time.sleep(0.05)
