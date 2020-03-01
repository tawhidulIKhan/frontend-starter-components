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