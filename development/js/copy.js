const copy = (id, content) => {
    new ClipboardJS(id, {
        text: function() {
        document.querySelector(id).innerHTML = "Copied!"
        return content;
    },
    });
    
}
// Banner Style 1 ============

copy('#banner-style-1-html', `<section class="banner banner-style-1 image-bg-1">
<div class="container">
    <div class="row">
        <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="content-block">
                <h1 class="heading">Profect App For Boost Your Business</h1>
                <p class="desc">The collapse of the online-advertising market in 2001 made marketing on the Internet seem even less compelling.</p>
                <button>Buy Now</button>
            </div>                    
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="image-block">
                <img src="" />
            </div>                    
        </div>
    </div>
</div>
</section>    
`)

copy('#banner-style-1-css', `  .banner-style-1 .content-block .heading{
    position: relative;
    display: block;
    font-size: 48px;
    line-height: 72px;
    font-weight: 500;
    color: #fff;
    margin-bottom: 26px;
  }

  .banner-style-1 .content-block .desc{
    position: relative;
    display: block;
    font-size: 18px;
    line-height: 36px;
    font-weight: 500;
    color: #fff;
    margin-bottom: 51px;
    }
`)


// Banner Style 2 ======================

copy('#banner-style-2-html', `<section class="banner banner-style-2 image-bg-1">
<div class="container">
    <div class="row">
        <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="content-block">
                <h1 class="heading">Profect App For Boost Your Business</h1>
                <p class="desc">The collapse of the online-advertising market in 2001 made marketing on the Internet seem even less compelling.</p>
                <button>Buy Now</button>
            </div>                    
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="image-block">
                <img src="" />
            </div>                    
        </div>
    </div>
</div>
</section>    
`)

copy('#banner-style-2-css', `  .banner-style-2 .content-block .heading{
    position: relative;
    display: block;
    font-size: 48px;
    line-height: 72px;
    font-weight: 500;
    color: #fff;
    margin-bottom: 26px;
  }

  .banner-style-2 .content-block .desc{
    position: relative;
    display: block;
    font-size: 18px;
    line-height: 36px;
    font-weight: 500;
    color: #fff;
    margin-bottom: 51px;
    }
`)

// Icon box 1 ======================

copy('#icon-box-style-1-html', `<div class="iconbox-style1 text-center">
<div class="icon-block">
    <img src="assets/images/icons/1.png" />
</div>
<div class="txt-block">
    <h4 class="heading">Easy to customize</h4>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
</div>
</div>
`)

copy('#icon-box-style-2-css', `  .iconbox-style1{
    position: relative;
    display: block;
    overflow: hidden;
    background: #fff;
    padding: 50px 30px 59px 30px;
    box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.1);
    z-index: 1;
  }

  .iconbox-style1 .icon-block{
    margin-bottom: 30px;
  }
  .iconbox-style1 .heading{
    position: relative;
    display: block;
    font-size: 18px;
    line-height: 28px;
    color: #222;
    font-weight: 500;
    margin-bottom: 18px;
    transition: all 500ms ease;
  }`)


// Icon box 2 ======================

copy('#icon-box-style-2-html', `<div class="iconbox-style2">
<div class="icon-block">
    <img src="assets/images/icons/style2/1.png" />
</div>
<div class="txt-block">
    <h4 class="heading">Easy to customize</h4>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
</div>
</div>
`)

copy('#icon-box-style-2-css', `  .iconbox-style2{
    position: relative;
    padding-left: 83px;
    padding-right: 24px
  }

  .iconbox-style2 .icon-block{
    position: absolute;
    left:0;
    top:0;
  }

  .iconbox-style2 .heading{
    position: relative;
    display: block;
    font-size: 18px;
    line-height: 28px;
    color: #222;
    font-weight: 500;
    margin-bottom: 10px;
    transition: all 500ms ease;
  }
`)

// Video style 1

copy('#video-style1-html', `<div class="video-style-one image-bg-2">
<div class="inner-content text-center">
    <a class="play-video" href="http://www.youtube.com/watch?v=0O2aH4XLbto">
        <i class="fas fa-play"></i>
    </a>
</div>
</div>
`)

copy('#video-style1-css', `/* Video style one start  */
.video-style-one {
    min-height: 400px;
    display: flex;
    align-items: center;
}

.video-style-one .inner-content {
    width: 100%;
    display: block;
}

.video-style-one a {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: #ff6321;
    font-family: "Rubik", sans-serif;
    color: #ffffff;
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
    line-height: 70px;
    display: inline-block;
    -webkit-animation: pulseBig 2s infinite;
    animation: pulseBig 2s infinite;
}

/* pulseBig */
@-webkit-keyframes pulseBig {
    0% {
        -webkit-box-shadow: 0 0 0 0 #ff6321;
        box-shadow: 0 0 0 0 #ff6321;
    }

    70% {
        -webkit-box-shadow: 0 0 0 20px rgba(1, 93, 199, 0);
        box-shadow: 0 0 0 20px rgba(1, 93, 199, 0);
    }

    100% {
        -webkit-box-shadow: 0 0 0 0 rgba(1, 93, 199, 0);
        box-shadow: 0 0 0 0 rgba(1, 93, 199, 0);
    }
}

@keyframes pulseBig {
    0% {
        -webkit-box-shadow: 0 0 0 0 #ff6321;
        box-shadow: 0 0 0 0 #ff6321;
    }

    70% {
        -webkit-box-shadow: 0 0 0 20px rgba(1, 93, 199, 0);
        box-shadow: 0 0 0 20px rgba(1, 93, 199, 0);
    }

    100% {
        -webkit-box-shadow: 0 0 0 0 rgba(1, 93, 199, 0);
        box-shadow: 0 0 0 0 rgba(1, 93, 199, 0);
    }
}
/* Video style one end */

`)


// Video button style 1

copy('#video-btn-style1-html', `<div class="video-btn-style1">
<div class="inner-content">
    <a
        class="btn play-video"
        href="http://www.youtube.com/watch?v=0O2aH4XLbto"
    >
    Play video
    <span>
        <i class="fas fa-play"></i>

    </span>
    </a>
</div>
</div>
`)

copy('#video-btn-style1-css', `/* Video button style one start */
.video-btn-style1{
  position: relative;
  display:inline-block;
}
.video-btn-style1 a{
  background: #ff6321;
  width: 222px;
  height: 57px;
  text-align: left;
  display: flex;
  align-items: center;
  border-radius: 100px;
  color: #fff;
  font-size: 18px;
  text-transform: uppercase;
  padding-left: 31px;
  font-weight: 600;
}

.video-btn-style1 a:hover{
  color:#ddd;
}
.video-btn-style1 a span{
  position: absolute;
  right: 5px;
  width: 50px;
  background: #fff;
  height: 50px;
  border-radius: 100px;
  text-align: center;
  line-height: 48px;
  color: #ff6321;
  box-shadow: 0px 0px 14px 2px rgba(0,0,0,.1);
}
/* Video button style one end */
`)



// Video button style 2

copy('#video-btn-style2-html', `<div class="video-btn-style2">
<div class="inner-content">
    <a
        class="play-video"
        href="http://www.youtube.com/watch?v=0O2aH4XLbto"
    >
    <span>
        <i class="fas fa-play"></i>
    </span>
    Watch the video

    </a>
</div>
</div>
`)

copy('#video-btn-style2-css', `/* Video button style two start */
.video-btn-style2{
  position: relative;
  display:inline-block;
}
.video-btn-style2 a{
  width: 222px;
  height: 57px;
  text-align: left;
  display: flex;
  align-items: center;
  border-radius: 100px;
  color: #959595;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 600;
}

.video-btn-style2 a:hover{
  color:#ddd;
}
.video-btn-style2 a span{
  width: 50px;
  background: #ff6321;
  height: 50px;
  border-radius: 100px;
  text-align: center;
  line-height: 48px;
  color: #fff;
  box-shadow: 0px 0px 14px 2px rgba(0,0,0,.1);
  margin-right: 14px;
}`)


// Video button style 3

copy('#video-btn-style3-html', `<div class="video-btn-style2">
<div class="inner-content">
    <a
        class="play-video"
        href="http://www.youtube.com/watch?v=0O2aH4XLbto"
    >
    <span class="with-pulse-effect">
        <i class="fas fa-play"></i>
    </span>
    Watch the video

    </a>
</div>
</div>
`)

copy('#video-btn-style3-css', `/* Video button style three start */
.video-btn-style2{
  position: relative;
  display:inline-block;
}
.video-btn-style2 a{
  width: 222px;
  height: 57px;
  text-align: left;
  display: flex;
  align-items: center;
  border-radius: 100px;
  color: #959595;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 600;
}

.video-btn-style2 a:hover{
  color:#ddd;
}
.video-btn-style2 a span{
  width: 50px;
  background: #ff6321;
  height: 50px;
  border-radius: 100px;
  text-align: center;
  line-height: 48px;
  color: #fff;
  box-shadow: 0px 0px 14px 2px rgba(0,0,0,.1);
  margin-right: 14px;
}`)
