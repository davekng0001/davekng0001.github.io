function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 47,
      vars: 0,
      consts: [[1, "container"], [1, "about-h1"], [1, "about-container"], [1, "dave-img"], ["src", "/assets/dave_image.png", "alt", "Image of David King", 1, "dave-img-a"], [1, "links"], ["href", "https://www.linkedin.com/in/david-king-70379877/", "target", "_blank", "rel", "noopener noreferrer"], ["src", "/assets/linkedin.svg", "alt", "Linkedin Link", 1, "linkedin"], ["href", "https://github.com/davekng0001", "target", "_blank", "rel", "noopener noreferrer"], ["src", "/assets/github.png", "alt", "Github Link", 1, "github"], [1, "about-text-div"], [1, "about-text"], [1, "skill-h1"], [1, "skills"], [1, "skills-container"], [1, "skills-ul"], [1, "skills-h1"], [1, "skills-li"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "About Me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Keep in Touch: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " I have a love for music, writing, and solving problems! If I'm not making music, I'm writing a story, or building a new solution. With a degree in Engineering I like to focus my technical skills on webdevelopment and electronics projects. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Do you have any interesting projects, goals, or problems that you would like to talk about? What's your desired outcome? Let's work together to bring it into reality! Leave a message below and we can begin the great work! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h1", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Skills");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "section", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h1", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Web Development");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Angular");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "HTML");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "CSS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Typescript");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Python");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h1", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Engineering");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Circuitry");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Debugging");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Oscilloscope");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Circuit Simulation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["h1[_ngcontent-%COMP%]{\n    font-size: 30px;\n   \n    \n}\n .about-h1[_ngcontent-%COMP%]{\n     color: rgb(0, 0, 0);\n }\n ul[_ngcontent-%COMP%]{\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    \n}\n .container[_ngcontent-%COMP%]{\n    text-align: center;\n}\n .dave-img[_ngcontent-%COMP%]{\n    text-align: center;\n}\n .dave-img-a[_ngcontent-%COMP%]{\n    text-align: center;\n    width: 60%;\n    border-radius: 20%;\n    box-shadow: 3px 5px 4px gray;\n    \n\n}\n .links[_ngcontent-%COMP%]{\n    \n    font-weight: bold;\n}\n .linkedin[_ngcontent-%COMP%]{\n    margin-left: 1em;\n    \n    width: 1em;\n}\n .github[_ngcontent-%COMP%]{\n    width: 1em;\n    margin-left: 1em;\n    top: -1em;\n}\n .about-text-div[_ngcontent-%COMP%]{\n    margin-top: 1em;\n    \n    \n    padding-bottom: 1em;\n    padding-top: 1em;\n\n    \n    \n}\n .about-text[_ngcontent-%COMP%]{\n    font-size: 20px;\n    text-align: center;\n    padding-top: 1em;\n padding-right:5em;\n padding-left: 5em;\n padding-bottom: .1em;    \n color: rgb(0, 0, 0);\n}\n .skills-h1[_ngcontent-%COMP%]{\n    margin-bottom: .4em;\n    font-size: 25px;\n}\n .skills[_ngcontent-%COMP%]{\n    background: rgb(161, 206, 110);\n    padding-top: 0em;\n}\n .skills-ul[_ngcontent-%COMP%]{\n    margin: 0;\n    padding-left: .1em;\n    text-align: center;\n  \n}\n .skill-h1[_ngcontent-%COMP%]{\n    font-size: 28px;\n    color: rgb(0, 0, 0);\n    text-align: center;\n    margin-bottom: 0;\n    top: -5em;\n}\n .skills-li[_ngcontent-%COMP%]{\n\n    text-align: center;\n    max-width: auto;\n    font-size: 1em;\n    margin-bottom: .5em;\n\n    position:relative;\n}\n @media only screen and (max-width:500px){\n    .about-text[_ngcontent-%COMP%]{\n        padding: 10px;\n    }\n\n}\n @media only screen and (min-width:800px) {\n    \n    \n    .dave-img[_ngcontent-%COMP%]{\n        margin-top: 4em;\n        width: 50%;\n        height: 50%;\n        margin-bottom: 1em;\n    }\n\n    .about-container[_ngcontent-%COMP%]{\n        display: flex;\n        \n        \n        margin-bottom: 1em;\n  \n    }\n.about-container[_ngcontent-%COMP%]{\n        width: auto;\n        margin:auto;\n    \n    } \n    .about-text-div[_ngcontent-%COMP%]{\n        width: 80%;\n    }\n        .skills-container[_ngcontent-%COMP%]{\n        \n        width: auto;\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n\n    }\n    .skills-container[_ngcontent-%COMP%]{\n        \n        width: 800px;\n       margin: auto;\n        \n    }\n   \n}\n @media only screen and (min-width:1300px){\n\n    .about-container[_ngcontent-%COMP%] {\n        width: 1300px;\n    }\n   .skills-container[_ngcontent-%COMP%]{\n       \n       \n   }\n       \n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0ksZUFBZTs7O0FBR25CO0NBQ0M7S0FDSSxtQkFBbUI7Q0FDdkI7Q0FDRDtJQUNJLHFCQUFxQjtJQUNyQixTQUFTO0lBQ1QsVUFBVTtJQUNWO2tFQUM4RDtBQUNsRTtDQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0NBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7Q0FDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QiwwQkFBMEI7O0FBRTlCO0NBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsaUJBQWlCO0FBQ3JCO0NBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDtDQUNBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixTQUFTO0FBQ2I7Q0FDQTtJQUNJLGVBQWU7SUFDZixvQ0FBb0M7SUFDcEMsa0NBQWtDO0lBQ2xDLG1CQUFtQjtJQUNuQixnQkFBZ0I7OztJQUdoQix3QkFBd0I7QUFDNUI7Q0FDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0NBQ25CLGlCQUFpQjtDQUNqQixpQkFBaUI7Q0FDakIsb0JBQW9CO0NBQ3BCLG1CQUFtQjtBQUNwQjtDQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7Q0FDQTtJQUNJLDhCQUE4QjtJQUM5QixnQkFBZ0I7QUFDcEI7Q0FFQTtJQUNJLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsa0JBQWtCOztBQUV0QjtDQUNBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFNBQVM7QUFDYjtDQUVBOztJQUVJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsY0FBYztJQUNkLG1CQUFtQjs7SUFFbkIsaUJBQWlCO0FBQ3JCO0NBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7O0FBRUo7Q0FDQTs7O0lBR0k7UUFDSSxlQUFlO1FBQ2YsVUFBVTtRQUNWLFdBQVc7UUFDWCxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxhQUFhO1FBQ2Isb0NBQW9DO1FBQ3BDLHNCQUFzQjtRQUN0QixrQkFBa0I7O0lBRXRCO0FBQ0o7UUFDUSxXQUFXO1FBQ1gsV0FBVzs7SUFFZjtJQUNBO1FBQ0ksVUFBVTtJQUNkO1FBQ0k7O1FBRUEsV0FBVztRQUNYLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsOEJBQThCOztJQUVsQztJQUNBOztRQUVJLFlBQVk7T0FDYixZQUFZOztJQUVmOztBQUVKO0NBR0E7O0lBRUk7UUFDSSxhQUFhO0lBQ2pCO0dBQ0Q7T0FDSTtzQkFDZTs7R0FFbkI7OztBQUdIIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5oMXtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICBcbiAgICBcbn1cbiAuYWJvdXQtaDF7XG4gICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gfVxudWx7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIC8qIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg0MHJlbSwgMmZyKSk7ICovXG59XG5cbi5jb250YWluZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmRhdmUtaW1ne1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5kYXZlLWltZy1he1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogNjAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwJTtcbiAgICBib3gtc2hhZG93OiAzcHggNXB4IDRweCBncmF5O1xuICAgIC8qIG1hcmdpbi1ib3R0b206IDEuNWVtOyAqL1xuXG59XG4ubGlua3N7XG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmxpbmtlZGlue1xuICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gICAgLyogZGlzcGxheTogaW5saW5lOyAqL1xuICAgIHdpZHRoOiAxZW07XG59XG4uZ2l0aHVie1xuICAgIHdpZHRoOiAxZW07XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICB0b3A6IC0xZW07XG59XG4uYWJvdXQtdGV4dC1kaXZ7XG4gICAgbWFyZ2luLXRvcDogMWVtO1xuICAgIC8qIGJhY2tncm91bmQ6IHJnYigxNzcsIDIwNiwgMjQwKTsgKi9cbiAgICAvKiBib3gtc2hhZG93OiA0cHggNXB4IDRweCBncmF5OyAqL1xuICAgIHBhZGRpbmctYm90dG9tOiAxZW07XG4gICAgcGFkZGluZy10b3A6IDFlbTtcblxuICAgIFxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDIwJTsgKi9cbn1cbi5hYm91dC10ZXh0e1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDFlbTtcbiBwYWRkaW5nLXJpZ2h0OjVlbTtcbiBwYWRkaW5nLWxlZnQ6IDVlbTtcbiBwYWRkaW5nLWJvdHRvbTogLjFlbTsgICAgXG4gY29sb3I6IHJnYigwLCAwLCAwKTtcbn1cblxuLnNraWxscy1oMXtcbiAgICBtYXJnaW4tYm90dG9tOiAuNGVtO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn1cbi5za2lsbHN7XG4gICAgYmFja2dyb3VuZDogcmdiKDE2MSwgMjA2LCAxMTApO1xuICAgIHBhZGRpbmctdG9wOiAwZW07XG59XG5cbi5za2lsbHMtdWx7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmctbGVmdDogLjFlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIFxufVxuLnNraWxsLWgxe1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIHRvcDogLTVlbTtcbn1cblxuLnNraWxscy1saXtcblxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IGF1dG87XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgbWFyZ2luLWJvdHRvbTogLjVlbTtcblxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTAwcHgpe1xuICAgIC5hYm91dC10ZXh0e1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cblxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjgwMHB4KSB7XG4gICAgXG4gICAgXG4gICAgLmRhdmUtaW1ne1xuICAgICAgICBtYXJnaW4tdG9wOiA0ZW07XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIGhlaWdodDogNTAlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgfVxuXG4gICAgLmFib3V0LWNvbnRhaW5lcntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xuICAgICAgICAvKiB0ZXh0LWFsaWduOiBsZWZ0OyAqL1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIFxuICAgIH1cbi5hYm91dC1jb250YWluZXJ7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBtYXJnaW46YXV0bztcbiAgICBcbiAgICB9IFxuICAgIC5hYm91dC10ZXh0LWRpdntcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICB9XG4gICAgICAgIC5za2lsbHMtY29udGFpbmVye1xuICAgICAgICBcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIH1cbiAgICAuc2tpbGxzLWNvbnRhaW5lcntcbiAgICAgICAgXG4gICAgICAgIHdpZHRoOiA4MDBweDtcbiAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIFxuICAgIH1cbiAgIFxufVxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMzAwcHgpe1xuXG4gICAgLmFib3V0LWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMzAwcHg7XG4gICAgfVxuICAgLnNraWxscy1jb250YWluZXJ7XG4gICAgICAgLyogd2lkdGg6IDEzMDBweDtcbiAgICAgICBtYXJnaW46IGF1dG87ICovXG4gICAgICAgXG4gICB9XG4gICAgICAgXG5cbn1cbiAgICAiXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _contactform_contactform_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./contactform/contactform.component */
    "./src/app/contactform/contactform.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/projects/projects.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }, {
      path: 'projects',
      component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"]
    }, {
      path: 'about',
      component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]
    }, {
      path: 'contact',
      component: _contactform_contactform_component__WEBPACK_IMPORTED_MODULE_3__["ContactformComponent"]
    }];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./navigation/navigation.component */
    "./src/app/navigation/navigation.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _contactform_contactform_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./contactform/contactform.component */
    "./src/app/contactform/contactform.component.ts");

    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'techportfolio';
    });

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navigation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-contactform");
        }
      },
      directives: [_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _contactform_contactform_component__WEBPACK_IMPORTED_MODULE_3__["ContactformComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./navigation/navigation.component */
    "./src/app/navigation/navigation.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _contactform_contactform_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./contactform/contactform.component */
    "./src/app/contactform/contactform.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/projects/projects.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _contactform_contactform_component__WEBPACK_IMPORTED_MODULE_5__["ContactformComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _contactform_contactform_component__WEBPACK_IMPORTED_MODULE_5__["ContactformComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/contactform/contactform.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/contactform/contactform.component.ts ***!
    \******************************************************/

  /*! exports provided: ContactformComponent */

  /***/
  function srcAppContactformContactformComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactformComponent", function () {
      return ContactformComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ContactformComponent = /*#__PURE__*/function () {
      function ContactformComponent() {
        _classCallCheck(this, ContactformComponent);
      }

      _createClass(ContactformComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactformComponent;
    }();

    ContactformComponent.ɵfac = function ContactformComponent_Factory(t) {
      return new (t || ContactformComponent)();
    };

    ContactformComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactformComponent,
      selectors: [["app-contactform"]],
      decls: 18,
      vars: 0,
      consts: [[1, "container"], ["action", "https://formsubmit.co/davekng0001@gmail.com", "method", "POST"], ["type", "hidden", "name", "_captcha", "value", "false"], ["for", "name"], ["id", "name", "type", "text", "name", "name", "required", ""], ["for", "email"], ["id", "email", "type", "email", "name", "email", "required", ""], ["for", "Message"], ["name", "message", "id", "Message", "cols", "30", "rows", "10"], [1, "btn"], ["type", "submit"]],
      template: function ContactformComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Let's Build Your Dreams");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Message");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "textarea", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Send");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["label[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{\n    display:block;\n}\nlabel[_ngcontent-%COMP%]{\n    display: block;\n    font-size: 1.2em;\n    margin-bottom: .5em;\n}\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{\n    font-size: 15px;\n    width:100%;\n    padding: .8em;\n    margin-bottom: .5em;\n    border: 1px solid gray;\n    border-radius: .3em;\n    box-sizing: border-box;\n}\n.p-snd-msg[_ngcontent-%COMP%]{\n    margin-bottom: .2em;\n}\nbutton[_ngcontent-%COMP%]{\n\n    text-align: center;\n    background: rgb(170, 170, 170);\n    color: rgb(0, 0, 0);\n    font-weight: bold;\n    font-size: 1.1em;\n    border: none;\n    margin-top: 0em;\n    margin-bottom: 5em;\n    border-radius: 2em;\n    display: inline-block;\n    width: 5em;\n    cursor: pointer;\n\n}\n.btn[_ngcontent-%COMP%]{\n    text-align: center;\n}\n@media only screen and (min-width:650px){\n    .container[_ngcontent-%COMP%]{\n       \n        \n\n        width: 600px;\n        margin: 0 auto;\n    }\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdGZvcm0vY29udGFjdGZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBOztJQUVJLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsZUFBZTs7QUFFbkI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0k7O1FBRUk7OzhCQUVzQjs7UUFFdEIsWUFBWTtRQUNaLGNBQWM7SUFDbEI7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0Zm9ybS9jb250YWN0Zm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWwsaW5wdXR7XG4gICAgZGlzcGxheTpibG9jaztcbn1cbmxhYmVse1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgbWFyZ2luLWJvdHRvbTogLjVlbTtcbn1cblxuaW5wdXQsdGV4dGFyZWF7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHdpZHRoOjEwMCU7XG4gICAgcGFkZGluZzogLjhlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAuNWVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgYm9yZGVyLXJhZGl1czogLjNlbTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLnAtc25kLW1zZ3tcbiAgICBtYXJnaW4tYm90dG9tOiAuMmVtO1xufVxuYnV0dG9ue1xuXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IHJnYigxNzAsIDE3MCwgMTcwKTtcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbi10b3A6IDBlbTtcbiAgICBtYXJnaW4tYm90dG9tOiA1ZW07XG4gICAgYm9yZGVyLXJhZGl1czogMmVtO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNWVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxufVxuLmJ0bntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo2NTBweCl7XG4gICAgLmNvbnRhaW5lcntcbiAgICAgICBcbiAgICAgICAgLyogcGFkZGluZy1sZWZ0OiAxMDBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTAwcHg7XG4gICAgICAgIG1hcmdpbjogMCAxZW0gMCAxZW07ICovXG5cbiAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG4gICAgXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactformComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contactform',
          templateUrl: './contactform.component.html',
          styleUrls: ['./contactform.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/about"];
    };

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 28,
      vars: 2,
      consts: [[1, "home"], [1, "container"], [1, "hero-container"], [1, "dave-img"], ["src", "/assets/dave_image.png", "alt", "Image of David King", 1, "dave-img-a"], [1, "links"], ["href", "https://www.linkedin.com/in/david-king-70379877/", "target", "_blank", "rel", "noopener noreferrer"], ["src", "/assets/linkedin.svg", "alt", "Linkedin Link", 1, "linkedin"], ["href", "https://github.com/davekng0001", "target", "_blank", "rel", "noopener noreferrer"], ["src", "/assets/github.png", "alt", "Github Link", 1, "github"], [1, "about-overview-container"], [1, "welcome-msg-1"], [1, "welcome-msg-2"], ["routerLinkActive", "router-link-active", 1, "proj-btn-a", 3, "routerLink"], [1, "proj-btn"], [1, "about-me-section"], [1, "about-ul"], [1, "about-li"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Keep in Touch: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Hi I'm Dave! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "This is my portfolio site where I share my work. Built using Angular, HTML, CSS, and Typescript. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "About Me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "section", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "WEB DEVELOPER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "ENGINEER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "ARTIST");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
      styles: ["h1[_ngcontent-%COMP%]{\n    font-size: 28px;\n}\nh3[_ngcontent-%COMP%]{\n    display: inline;\n}\nul[_ngcontent-%COMP%]{\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n}\n.home[_ngcontent-%COMP%]{\n    padding-bottom: 0;\n}\n.tech-solutions-container[_ngcontent-%COMP%]{\n \n    background: rgb(226, 211, 211);\n}\n.dave-img[_ngcontent-%COMP%]{\n    text-align: center;\n}\n.dave-img-a[_ngcontent-%COMP%]{\n    text-align: center;\n    width: 60%;\n    border-radius: 20%;\n    box-shadow: 3px 5px 4px gray;\n    \n\n}\n.welcome-msg-1[_ngcontent-%COMP%]{\n    text-align: center;\n    font-weight: bold;\n    font-style: italic;\n}\n.links[_ngcontent-%COMP%]{\n    \n    font-weight: bold;\n}\n.linkedin[_ngcontent-%COMP%]{\n    margin-left: 1em;\n    \n    width: 1em;\n}\n.github[_ngcontent-%COMP%]{\n    width: 1em;\n    margin-left: 1em;\n    top: -1em;\n}\n.about-overview-container[_ngcontent-%COMP%], .about-me-section[_ngcontent-%COMP%] {\n    font-size: 18px;\n    text-align: center;\n    padding-top: 1em;\n padding-right:5em;\n padding-left: 5em;\n padding-bottom: .1em;\n}\n.about-me-title[_ngcontent-%COMP%]{\n    text-align: center;\n    margin-top: 0;\n    position:relative;\n    top: 1em;\n    \n}\n.about-me-section[_ngcontent-%COMP%]{\n    background: rgb(219, 219, 245);\n}\n.about-ul[_ngcontent-%COMP%]{\n    margin: 0;\n    padding-left: .1em;\n    text-align: center;\n  \n}\n.about-li[_ngcontent-%COMP%]{\n\n    text-align: center;\n    max-width: auto;\n    font-size: 1.1em;\n    margin-bottom: 1em;\n\n    position:relative;\n}\n.tech-sol-title[_ngcontent-%COMP%]{\n    text-align: center;\n    margin-top: 0;\n    position:relative;\n    top: 1.2em;\n    margin-top: -.2em;\n    \n}\n.proj-btn[_ngcontent-%COMP%]{\n    \n    height: 50px;\n    width: 100px;\n    border: black;\n    border-width: 1em;\n    background: rgb(159, 214, 148);\n    border-radius: 1em;\n    font-size: .9em;\n    font-weight: bold;\n    color: rgb(0, 0, 0);\n    padding: .4em .4em; \n    cursor: pointer;\n}\n.tech-solutions-container[_ngcontent-%COMP%]{\n    text-align: center;\n}\n.creative[_ngcontent-%COMP%]{\n    text-align: center;\n}\n@media only screen and (min-width:1080px) {\n    .dave-img[_ngcontent-%COMP%]{\n        width: 800px;\n        margin-bottom: 1em;\n    }\n\n    .hero-container[_ngcontent-%COMP%]{\n        display: flex;\n        justify-content: space-between;\n        text-align: center;\n        margin-bottom: 1em;\n        \n  \n    }\n    .container[_ngcontent-%COMP%]{\n        \n    }\n    .hero-container[_ngcontent-%COMP%]{\n        width: auto;\n        margin: auto;\n    }\n\n    .about-overview-container[_ngcontent-%COMP%]{\n        padding-top: 2.8em;\n    }\n    \n}\n@media only screen and (min-width:1300px){\n\n    .hero-container[_ngcontent-%COMP%]{\n        width: 1300px;\n    }\n   \n       \n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBOztJQUVJLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsMEJBQTBCOztBQUU5QjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7Q0FDbkIsaUJBQWlCO0NBQ2pCLGlCQUFpQjtDQUNqQixvQkFBb0I7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFFBQVE7SUFDUix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksU0FBUztJQUNULGtCQUFrQjtJQUNsQixrQkFBa0I7O0FBRXRCO0FBR0E7O0lBRUksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCOztJQUVsQixpQkFBaUI7QUFDckI7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixpQkFBaUI7O0FBRXJCO0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSTtRQUNJLFlBQVk7UUFDWixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsOEJBQThCO1FBQzlCLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsaUJBQWlCOztJQUVyQjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7QUFFSjtBQUlBOztJQUVJO1FBQ0ksYUFBYTtJQUNqQjs7OztBQUlKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmgxe1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbn1cbmgze1xuICAgIGRpc3BsYXk6IGlubGluZTtcbn1cblxudWx7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuLmhvbWV7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG59XG4udGVjaC1zb2x1dGlvbnMtY29udGFpbmVye1xuIFxuICAgIGJhY2tncm91bmQ6IHJnYigyMjYsIDIxMSwgMjExKTtcbn1cbi5kYXZlLWltZ3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZGF2ZS1pbWctYXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBib3JkZXItcmFkaXVzOiAyMCU7XG4gICAgYm94LXNoYWRvdzogM3B4IDVweCA0cHggZ3JheTtcbiAgICAvKiBtYXJnaW4tYm90dG9tOiAxLjVlbTsgKi9cblxufVxuXG4ud2VsY29tZS1tc2ctMXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLmxpbmtze1xuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5saW5rZWRpbntcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xuICAgIC8qIGRpc3BsYXk6IGlubGluZTsgKi9cbiAgICB3aWR0aDogMWVtO1xufVxuLmdpdGh1YntcbiAgICB3aWR0aDogMWVtO1xuICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gICAgdG9wOiAtMWVtO1xufVxuLmFib3V0LW92ZXJ2aWV3LWNvbnRhaW5lciwgLmFib3V0LW1lLXNlY3Rpb24ge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDFlbTtcbiBwYWRkaW5nLXJpZ2h0OjVlbTtcbiBwYWRkaW5nLWxlZnQ6IDVlbTtcbiBwYWRkaW5nLWJvdHRvbTogLjFlbTtcbn1cbi5hYm91dC1tZS10aXRsZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICB0b3A6IDFlbTtcbiAgICAvKiBtYXJnaW4tdG9wOiAtLjJlbTsgKi9cbn1cbi5hYm91dC1tZS1zZWN0aW9ue1xuICAgIGJhY2tncm91bmQ6IHJnYigyMTksIDIxOSwgMjQ1KTtcbn1cbi5hYm91dC11bHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZy1sZWZ0OiAuMWVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgXG59XG5cblxuLmFib3V0LWxpe1xuXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1heC13aWR0aDogYXV0bztcbiAgICBmb250LXNpemU6IDEuMWVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcblxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xufVxuXG5cbi50ZWNoLXNvbC10aXRsZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICB0b3A6IDEuMmVtO1xuICAgIG1hcmdpbi10b3A6IC0uMmVtO1xuICAgIFxufVxuXG4ucHJvai1idG57XG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgYm9yZGVyOiBibGFjaztcbiAgICBib3JkZXItd2lkdGg6IDFlbTtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTU5LCAyMTQsIDE0OCk7XG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xuICAgIGZvbnQtc2l6ZTogLjllbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xuICAgIHBhZGRpbmc6IC40ZW0gLjRlbTsgXG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRlY2gtc29sdXRpb25zLWNvbnRhaW5lcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY3JlYXRpdmV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTA4MHB4KSB7XG4gICAgLmRhdmUtaW1ne1xuICAgICAgICB3aWR0aDogODAwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICB9XG5cbiAgICAuaGVyby1jb250YWluZXJ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgICAgIC8qIHdpZHRoOiBhdXRvOyAqL1xuICBcbiAgICB9XG4gICAgLmNvbnRhaW5lcntcbiAgICAgICAgLyogd2lkdGg6IGF1dG8gOyAqL1xuICAgIH1cbiAgICAuaGVyby1jb250YWluZXJ7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuXG4gICAgLmFib3V0LW92ZXJ2aWV3LWNvbnRhaW5lcntcbiAgICAgICAgcGFkZGluZy10b3A6IDIuOGVtO1xuICAgIH1cbiAgICBcbn1cblxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMzAwcHgpe1xuXG4gICAgLmhlcm8tY29udGFpbmVye1xuICAgICAgICB3aWR0aDogMTMwMHB4O1xuICAgIH1cbiAgIFxuICAgICAgIFxuXG59XG4gICAgIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/navigation/navigation.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/navigation/navigation.component.ts ***!
    \****************************************************/

  /*! exports provided: NavigationComponent */

  /***/
  function srcAppNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
      return NavigationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return [""];
    };

    var NavigationComponent = /*#__PURE__*/function () {
      function NavigationComponent() {
        _classCallCheck(this, NavigationComponent);

        this.mobileBtn = document.getElementById('mobile-menu');
        this.nav = document.querySelector('nav');
        this.mobileBtnExit = document.getElementById('mobile-exit');
        this.menutoggle = false;
      }

      _createClass(NavigationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openMenu",
        value: function openMenu() {
          this.menutoggle = true;
        }
      }, {
        key: "closeMenu",
        value: function closeMenu() {
          this.menutoggle = false;
        }
      }]);

      return NavigationComponent;
    }();

    NavigationComponent.ɵfac = function NavigationComponent_Factory(t) {
      return new (t || NavigationComponent)();
    };

    NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavigationComponent,
      selectors: [["app-navigation"]],
      decls: 18,
      vars: 4,
      consts: [[1, "navbar"], [1, "container"], [1, "logo"], ["routerLinkActive", "router-link-active", 1, "logo-a", 3, "routerLink"], [1, "logo-span"], ["src", "/assets/menu.svg", "alt", "Open Menu", 1, "mobile-menu", 3, "click"], [1, "menu-exit-div"], ["src", "/assets/close_blk.svg", "alt", "close menu", 1, "mobile-menu-exit", 3, "click"], [1, "nav-links"], [1, "menu-item-li"], ["routerLink]", "['']", "routerLinkActive", "router-link-active", 1, "current", "menu-item-a"], ["routerLink]", "['about']", "routerLinkActive", "router-link-active", 1, "current", "menu-item-a"]],
      template: function NavigationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "373 Creative ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Engineering");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_img_click_7_listener() {
            return ctx.openMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_img_click_10_listener() {
            return ctx.closeMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("menu-open", ctx.menutoggle == true);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
      styles: [".container[_ngcontent-%COMP%]{\n    display: flex;\n    place-content: space-between;\n}\n\n.navbar[_ngcontent-%COMP%]{\n    background: rgb(255, 255, 255);\n    padding: 1em;\n}\n\nnav[_ngcontent-%COMP%]{\n    display: none;\n}\n\n.menu-open[_ngcontent-%COMP%]{\n    display: block;\n\n}\n\nnav[_ngcontent-%COMP%]{\n    position: fixed;\n    z-index: 999; \n    width: 66%;\n    right: 0;\n    top: 0;\n    background: #43505e;\n    height: 100vh; \n    padding: 1em;\n    color: white;\n}\n\n.nav-links[_ngcontent-%COMP%]{\n    color: white;\n    text-decoration: none;\n    list-style-type: none;\n    \n\n}\n\nli[_ngcontent-%COMP%]{\n    font-size: 20px;\n    margin-bottom: 1em;\n}\n\n.menu-item-a[_ngcontent-%COMP%]{\n    \n    color: white;\n    text-decoration: none;\n    \n}\n\n.span-li[_ngcontent-%COMP%]{\n    color: rgb(132, 161, 255);\n    padding-left: 0em;\n    margin-left: 0;\n}\n\n.logo-a[_ngcontent-%COMP%] {\n    text-decoration: none;\n    font-weight: bold;\n    color: black;\n    font-size: 2em;\n}\n\n.links[_ngcontent-%COMP%]{\n    display: inline;\n    text-align: right;\n    margin-left: 60px;\n}\n\n.linkedin[_ngcontent-%COMP%]{\n    margin-left: 1em;\n    display: inline;\n    width: 1.1em;\n    \n}\n\n.linkedin-menu[_ngcontent-%COMP%]{\n    width: 2em;\n}\n\n.github[_ngcontent-%COMP%]{\n    width: 1.1em;\n    margin-left: 1em;\n    top: -1em;\n}\n\n.github-menu[_ngcontent-%COMP%]{\n    width: 2em;\n}\n\n\n\n.mobile-menu[_ngcontent-%COMP%], .mobile-menu-exit[_ngcontent-%COMP%]{\n    \n    cursor: pointer;\n   \n}\n\n@media only screen and (min-width:768px){\n\n    .mobile-menu[_ngcontent-%COMP%], .mobile-menu-exit[_ngcontent-%COMP%]{\n        display: none;\n    }\n    .navbar[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]{\n        margin-top: .5em;\n        margin-bottom: 0em;\n        margin-left: 2em;\n        padding: 0em;\n        display: flex;\n        justify-content: space-between;\n        background: none;\n         position: unset;\n        height: 3em;\n        width: 100%;\n        \n    }\n    .container[_ngcontent-%COMP%]{\n        width: 100%;\n        margin-left: 2em;\n        margin-right: 2em;\n    }\n    .logo[_ngcontent-%COMP%]{\n        width: 100%;\n    }\n    ul[_ngcontent-%COMP%]{\n        display: flex;\n        color: black;\n        text-align: right;\n        margin-right: 2em;\n    }\n    .nav-links[_ngcontent-%COMP%]{\n        \n    }\n    .menu-item-a[_ngcontent-%COMP%]{\n        color: rgb(39, 39, 39);\n        font-weight: bold;\n        font-size: 18px;\n    }\n    .menu-item-li[_ngcontent-%COMP%]{\n        margin-right: 1em;\n    }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLGFBQWE7SUFDYiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsWUFBWTtBQUNoQjs7QUFJQTtJQUNJLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxjQUFjOztBQUVsQjs7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osVUFBVTtJQUNWLFFBQVE7SUFDUixNQUFNO0lBQ04sbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFDQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIscUJBQXFCOzs7QUFHekI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUNBOztJQUVJLFlBQVk7SUFDWixxQkFBcUI7O0FBRXpCOztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixZQUFZOztBQUVoQjs7QUFDQTtJQUNJLFVBQVU7QUFDZDs7QUFDQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsU0FBUztBQUNiOztBQUNBO0lBQ0ksVUFBVTtBQUNkOztBQUNBOzs7OztHQUtHOztBQUVIO0lBQ0ksZUFBZTtJQUNmLGVBQWU7O0FBRW5COztBQUVBOztJQUVJO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLGFBQWE7UUFDYiw4QkFBOEI7UUFDOUIsZ0JBQWdCO1NBQ2YsZUFBZTtRQUNoQixXQUFXO1FBQ1gsV0FBVzs7SUFFZjtJQUNBO1FBQ0ksV0FBVztRQUNYLGdCQUFnQjtRQUNoQixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksYUFBYTtRQUNiLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsaUJBQWlCO0lBQ3JCO0lBQ0E7O0lBRUE7SUFDQTtRQUNJLHNCQUFzQjtRQUN0QixpQkFBaUI7UUFDakIsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCOztBQUVKIiwiZmlsZSI6InNyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLmNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBsYWNlLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5uYXZiYXJ7XG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIHBhZGRpbmc6IDFlbTtcbn1cblxuXG5cbm5hdntcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLm1lbnUtb3BlbntcbiAgICBkaXNwbGF5OiBibG9jaztcblxufVxubmF2e1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiA5OTk7IFxuICAgIHdpZHRoOiA2NiU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJhY2tncm91bmQ6ICM0MzUwNWU7XG4gICAgaGVpZ2h0OiAxMDB2aDsgXG4gICAgcGFkZGluZzogMWVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5uYXYtbGlua3N7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgXG5cbn1cbmxpe1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG4ubWVudS1pdGVtLWF7XG4gICAgXG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBcbn1cbi5zcGFuLWxpe1xuICAgIGNvbG9yOiByZ2IoMTMyLCAxNjEsIDI1NSk7XG4gICAgcGFkZGluZy1sZWZ0OiAwZW07XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5sb2dvLWEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAyZW07XG59XG5cbi5saW5rc3tcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XG59XG4ubGlua2VkaW57XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgd2lkdGg6IDEuMWVtO1xuICAgIFxufVxuLmxpbmtlZGluLW1lbnV7XG4gICAgd2lkdGg6IDJlbTtcbn1cbi5naXRodWJ7XG4gICAgd2lkdGg6IDEuMWVtO1xuICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gICAgdG9wOiAtMWVtO1xufVxuLmdpdGh1Yi1tZW51e1xuICAgIHdpZHRoOiAyZW07XG59XG4vKiAubG9nby1zcGFue1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogcmdiKDQ2LCA0NiwgNDYpO1xuICAgIGZvbnQtc2l6ZTogMWVtOyBcbn0gKi9cblxuLm1vYmlsZS1tZW51LCAubW9iaWxlLW1lbnUtZXhpdHtcbiAgICAvKiB3aWR0aDogNiU7ICovXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgXG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjhweCl7XG5cbiAgICAubW9iaWxlLW1lbnUsIC5tb2JpbGUtbWVudS1leGl0e1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAubmF2YmFyLCBuYXZ7XG4gICAgICAgIG1hcmdpbi10b3A6IC41ZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBlbTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDJlbTtcbiAgICAgICAgcGFkZGluZzogMGVtO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICBwb3NpdGlvbjogdW5zZXQ7XG4gICAgICAgIGhlaWdodDogM2VtO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgXG4gICAgfVxuICAgIC5jb250YWluZXJ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMmVtO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDJlbTtcbiAgICB9XG4gICAgLmxvZ297XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICB1bHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyZW07XG4gICAgfVxuICAgIC5uYXYtbGlua3N7XG4gICAgICAgIFxuICAgIH1cbiAgICAubWVudS1pdGVtLWF7XG4gICAgICAgIGNvbG9yOiByZ2IoMzksIDM5LCAzOSk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuICAgIC5tZW51LWl0ZW0tbGl7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICAgIH1cblxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navigation',
          templateUrl: './navigation.component.html',
          styleUrls: ['./navigation.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/projects.component.ts":
  /*!************************************************!*\
    !*** ./src/app/projects/projects.component.ts ***!
    \************************************************/

  /*! exports provided: ProjectsComponent */

  /***/
  function srcAppProjectsProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
      return ProjectsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProjectsComponent = /*#__PURE__*/function () {
      function ProjectsComponent() {
        _classCallCheck(this, ProjectsComponent);
      }

      _createClass(ProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProjectsComponent;
    }();

    ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) {
      return new (t || ProjectsComponent)();
    };

    ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectsComponent,
      selectors: [["app-projects"]],
      decls: 1,
      vars: 0,
      template: function ProjectsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "section");
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-projects',
          templateUrl: './projects.component.html',
          styleUrls: ['./projects.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/davidking/Development/Angular/portfolio-davidk/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map