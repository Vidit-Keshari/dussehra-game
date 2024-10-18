from PIL import Image

image_path = 'resources/aim.png'  #Enter path to image and image's correct name
image = Image.open(image_path)

rotated_image = image.rotate(17.6, expand=True) #Change 17.6 the the desired degrees

rotated_image_path = 'resources/rotated_aim.png' #Enter path where you want the image to be saved, you can set the new name too!
rotated_image.save(rotated_image_path)

rotated_image_path
