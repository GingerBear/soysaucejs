soysauce.overlay = (function() {
  var TRANSITION_END = "transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd";
  var $body = $("body");
  var $viewport = $("meta[name='viewport']");

  function Overlay() {
    var self = this;

    this.overlay;
    this.content;
    this.close;
    this.hiddenItems = null;
    this.isOn = false;
    this.startingOrientation = "";

    $(document).ready(function() {
      self.init();
    });
  };

  Overlay.prototype.init = function(selector) {
    var div = document.createElement("div");
    var self = this;

    if ($("[data-ss-utility='overlay']").length) return false;

    div.setAttribute("data-ss-utility", "overlay");
    div.setAttribute("data-ss-state", "inactive");

    document.body.appendChild(div);

    this.overlay = $("[data-ss-utility='overlay']");

    this.overlay.append("<div data-ss-component='close'>tap to close</div>");
    this.close = this.overlay.find("[data-ss-component='close']");

    this.overlay.append("<div data-ss-component='content'></div>");
    this.content = this.overlay.find("[data-ss-component='content']");

    this.close.on("click", function() {
      self.off();
    });

    return true;
  };

  Overlay.prototype.on = function(selector, css, showClose) {
    var self = this;

    if (this.isOn) return;

    if (typeof(selector) === "string") {
      this.overlay.appendTo(selector);
    }

    this.overlay.show();

    if (showClose) {
      this.close.show();
    }

    window.setTimeout(function() {
      if (css) {
        try {
          JSON.stringify(css);
          self.overlay.css(css);
        }
        catch(e) {
          console.warn("Soysauce: Could not attach css; need to pass JSON css object");
        }
      }
      self.overlay.attr("data-ss-state","active");
      self.isOn = true;
    }, 0);
  };

  Overlay.prototype.off = function() {
    if (!this.isOn) return;

    this.isOn = false;
    this.overlay.attr("data-ss-state","inactive").removeAttr("style").hide();
    this.overlay.appendTo("body");

    this.content.find("[data-ss-widget]").each(function() {
      soysauce.destroy(this);
    });

    this.content.empty();

    $body.css({
      "overflow": "",
      "height": ""
    });

    if (this.hiddenItems) {
      this.hiddenItems.show();
      this.hiddenItems = null;
    }

    if (this.startingOrientation !== soysauce.browser.getOrientation()) {
      $(window).trigger(("onorientationchange" in window) && !/android/i.test(navigator.userAgent) ? "orientationchange" : "resize")
    }
  };

  Overlay.prototype.toggle = function() {
    if (this.isOn) {
      this.off();
    }
    else {
      this.on();
    }
  };

  Overlay.prototype.injectCarousel = function(carousel, css) {
    var items = carousel.items.clone();
    var $carousel;
    var self = this;
    var showCloseButton = true;
    var additionalOptions = "";
    var zoomCloseButtonText = carousel.widget.attr("data-ss-zoom-close-text");

    this.on(null, css, showCloseButton);

    if (carousel.infinite) {
      items = items.slice(1, carousel.numChildren - 1);
    }
    else {
      additionalOptions += "finite";
    }

    items.removeAttr("data-ss-state").removeAttr("style");
    this.content.wrapInner("<div data-ss-widget='carousel' data-ss-options='overlay " + additionalOptions + "' data-ss-index=" + carousel.index + "/>");

    $carousel = this.content.find("[data-ss-widget='carousel']");
    $carousel.append(items);
    
    if (zoomCloseButtonText) {
      this.overlay.find("[data-ss-component='close']").text(zoomCloseButtonText);
    }

    this.startingOrientation = soysauce.browser.getOrientation();

    this.overlay.one(TRANSITION_END, function() {
      $carousel.one("SSWidgetReady", function() {
        $body.css({
          "overflow": "hidden",
          "height": "100%"
        });
        self.hiddenItems = $body.find("> *:not([data-ss-utility]):not(#ios7fix)");
        self.hiddenItems.hide();
      });
      soysauce.init($carousel[0]);
    });
  };

  Overlay.prototype.hideAssets = function() {
    this.close.css("opacity", "0");
  };

  Overlay.prototype.showAssets = function() {
    this.close.css("opacity", "1");
  };

  return new Overlay();

})();
