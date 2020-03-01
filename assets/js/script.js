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