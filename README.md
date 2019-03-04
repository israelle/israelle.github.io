
# AR.js - Augmented Reality for the Web
=======
# threex-artoolkit


AR drawing project

my test

threex.artookit is the three.js extension to easily handle [artoolkit](https://github.com/artoolkit/jsartoolkit5).
It is the main part of my [AR.js effort](http://github.com/jeromeetienne/AR.js)

# Architechture

threex.artoolkit is composed of 3 classes

- ```THREEx.ArToolkitSource``` : It is the image which is analyzed to do the position tracking.
  It can be the webcam, a video or even an image
- ```THREEx.ArToolkitContext```: It is the main engine. It will actually find the marker position
  in the image source.
- ```THREEx.ArMarkerControls```: it controls the position of the marker
  It use the classical [three.js controls API](https://github.com/mrdoob/three.js/tree/master/examples/js/controls). 
  It will make sure to position your content right on top of the marker. 


### THREEx.ArMarkerControls 

```javascript
var parameters = {
	// size of the marker in meter
	size : 1,
	// type of marker - ['pattern', 'barcode', 'unknown' ]
	type : 'unknown',
	// url of the pattern - IIF type='pattern'
	patternUrl : null,
	// value of the barcode - IIF type='barcode'
	barcodeValue : null,
	// change matrix mode - [modelViewMatrix, cameraTransformMatrix]
	changeMatrixMode : 'modelViewMatrix',
}
```


[![Augmented Website](https://user-images.githubusercontent.com/252962/27472386-0d11e59a-57f3-11e7-9fa5-34332c5484f7.png)](https://github.com/jeromeetienne/AR.js)

[![npm](https://img.shields.io/npm/v/ar.js.svg)](https://www.npmjs.com/package/ar.js)
[![npm](https://img.shields.io/npm/dt/ar.js.svg)](https://www.npmjs.com/package/ar.js)
[![Build Status](https://travis-ci.org/jeromeetienne/AR.js.svg?branch=master)](https://travis-ci.org/jeromeetienne/AR.js)
<br class="badge-separator" />
[![Gitter chat](https://badges.gitter.im/AR-js/Lobby.png)](https://gitter.im/AR-js/Lobby)
<span class="badge-patreon"><a href="https://patreon.com/jerome_etienne" title="Donate to this project using Patreon"><img src="https://img.shields.io/badge/patreon-donate-yellow.svg" alt="Patreon donate button" /></a></span>
[![Twitter Follow](https://img.shields.io/twitter/follow/jerome_etienne.svg?style=plastic&label=Twitter&style=plastic)](https://twitter.com/jerome_etienne)

I am focusing hard on making AR for the web a reality.
This repository is where I publish the code.
Contact me anytime [@jerome_etienne](https://twitter.com/jerome_etienne).
Stuff is still moving fast, we have reached a good status though.
An article has been published on [uploadvr](https://uploadvr.com/ar-js-efficient-augmented-reality-for-the-web/).
So I wanted to publish this so people can try it and have fun with it :)

- **Very Fast** : it runs efficiently even on phones - [60 fps on my 2 year-old phone](https://twitter.com/jerome_etienne/status/831333879810236421)!
- **Web-based** : It is a pure web solution, so no installation required. Full javascript based on three.js + jsartoolkit5
- **Open Source** : It is completely open source and free of charge!
- **Standards** : It works on any phone with [webgl](http://caniuse.com/#feat=webgl) and [webrtc](http://caniuse.com/#feat=stream)

[![AR.js 1.0 Video](https://cloud.githubusercontent.com/assets/252962/23441016/ab6900ce-fe17-11e6-971b-24614fb8ac0e.png)](https://youtu.be/0MtvjFg7tik)

# Try it on Mobile

It works on all platforms. Android, IOS and window phone. It runs on **any browser with WebGL and WebRTC** (for iOS, you need to update to iOS11),

To try it on your phone, it is only 2 easy steps, check it out!

1. Open this [hiro marker image](https://jeromeetienne.github.io/AR.js/data/images/HIRO.jpg) in your desktop browser.
1. Open this [augmented reality webapps](https://jeromeetienne.github.io/AR.js/three.js/examples/mobile-performance.html) in your phone browser, and point it at your screen.

![qrcode pointing to the webapp](https://raw.githubusercontent.com/aloisdg/Documents/master/Image/qrcode.png)

**You are done!** It will open a webpage which read the phone webcam, localize a hiro marker and add 3d on top of it, as you can see below.

![screenshot](https://cloud.githubusercontent.com/assets/252962/23072106/73a0656c-f528-11e6-9fcd-3c900d1d47d3.jpg)

# What "Marker based" means
AR.js uses `artoolkit`, and so it is marker based.
`artoolkit` is a software with years of experience doing augmented reality. It is able to do a lot!

It supports a wide range of markers: multiple types of markers [pattern](https://github.com/artoolkit/artoolkit5/tree/master/doc/patterns)/[barcode](https://github.com/artoolkit/artoolkit-docs/blob/master/3_Marker_Training/marker_barcode.md)
multiple independent markers at the same time, or [multiple markers acting as a single marker](https://github.com/artoolkit/artoolkit-docs/blob/master/3_Marker_Training/marker_multi.md) up to you to choose.

More details about markers:

* [Artoolkit Open Doc](https://github.com/artoolkit/artoolkit-docs/tree/master/3_Marker_Training)
* [Detailed Article about markers](https://medium.com/chialab-open-source/ar-js-the-simpliest-way-to-get-cross-browser-ar-on-the-web-8f670dd45462) by [@nicolocarpignoli](https://github.com/nicolocarpignoli)

# Index
* [Get Started](#Get-Started)
* [Guides for Beginners](#Guides-for-beginners)
* [Advanced Guides](#Advanced-Guides)
* [Examples](#Examples)
* [Augmented Website](#Augmented-Website)
* [Tools](#Tools)
* [Performance](#Performance)
* [Status](#Status)
* [Folders](#Folders)
* [Browser Support](#Browser-Support)
* [Licenses](#Licenses)

⚠️ *Be aware that most recent features are currently released on `dev` branch.*


#  Get Started

## Augmented reality for the web in less than 10 lines of html

A-Frame magic :) All details are explained in this super post
["Augmented Reality in 10 Lines of HTML - AR.js with a-frame magic"](https://medium.com/arjs/augmented-reality-in-10-lines-of-html-4e193ea9fdbf)
by
[@AndraConnect](https://twitter.com/AndraConnect).

```html
<!doctype HTML>
<html>
<script src="https://aframe.io/releases/0.8.2/aframe.min.js"></script>
<script src="https://cdn.rawgit.com/jeromeetienne/AR.js/1.6.2/aframe/build/aframe-ar.js"></script>
  <body style='margin : 0px; overflow: hidden;'>
    <a-scene embedded arjs>
  	<a-marker preset="hiro">
            <a-box position='0 0.5 0' material='color: black;'></a-box>
  	</a-marker>
  	<a-entity camera></a-entity>
    </a-scene>
  </body>
</html>
```
