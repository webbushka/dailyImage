#DailyImage
A jQuery plugin for swapping images based on the day of the week, use the plugin to change an image out based on the day of the week.

##How it works
Here is a simple DailyImage setup:

	<script src="//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
	<script src="jquery.dailyimage.js"></script>
	<script>
	  jQuery("#image-placeholder").dailyImage();
	</script>

The placeholder will be replaced with an image

##Options
* __alt__
  * _type_: string
  * _defult_: Today's Image
  * The alternate text used for the image
* __imgClass__
  * _type_: string
  * _defult_: daily-image
  * The class used for the image
* __imgPath__
  * _type_: string
  * _defult_: img
  * The path to the image
* __imgType__
  * _type_: string
  * _defult_: png
  * The image file type
* __nameArray__
  * _type_: array
  * _defult_: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
  * The name for each image for each day

##Changelog
* `v 0.1` - Initial Release

##License
DailyImage is licensed under the [WTFPL License](http://sam.zoy.org/wtfpl/).