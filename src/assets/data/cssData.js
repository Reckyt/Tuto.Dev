export const codeDatas = [{
  className: 'loader1',
  div: `<div className="loader1"></div>`,
  css: `.loader1 {
    font-size: 10px;
    margin: 50px auto;
    text-indent: -9999em;
    width: 11em;
    height: 11em;
    border-radius: 50%;
    background: #ffffff;
    background: -moz-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
    background: -webkit-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
    background: -o-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
    background: -ms-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
    background: linear-gradient(to right, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
    position: relative;
    -webkit-animation: load3 1.4s infinite linear;
    animation: load3 1.4s infinite linear;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }
  .loader1:before {
    width: 50%;
    height: 50%;
    background: #ffffff;
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }
  .loader1:after {
    background: #0E1217;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  @-webkit-keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`,
},
{
  className: 'loader2',
  div: `<div className="loader2"></div>`,
  css: `.loader2,
    .loader2:before,
    .loader2:after {
      background: #ffffff;
      -webkit-animation: load1 1s infinite ease-in-out;
      animation: load1 1s infinite ease-in-out;
      width: 1em;
      height: 4em;
    }
    .loader2 {
      color: #ffffff;
      text-indent: -9999em;
      margin: 88px auto;
      position: relative;
      font-size: 11px;
      -webkit-transform: translateZ(0);
      -ms-transform: translateZ(0);
      transform: translateZ(0);
      -webkit-animation-delay: -0.16s;
      animation-delay: -0.16s;
    }
    .loader2:before,
    .loader2:after {
      position: absolute;
      top: 0;
      content: '';
    }
    .loader2:before {
      left: -1.5em;
      -webkit-animation-delay: -0.32s;
      animation-delay: -0.32s;
    }
    .loader2:after {
      left: 1.5em;
    }
    @-webkit-keyframes load1 {
      0%,
      80%,
      100% {
        box-shadow: 0 0;
        height: 4em;
      }
      40% {
        box-shadow: 0 -2em;
        height: 5em;
      }
    }
    @keyframes load1 {
      0%,
      80%,
      100% {
        box-shadow: 0 0;
        height: 4em;
      }
      40% {
        box-shadow: 0 -2em;
        height: 5em;
      }
    }   
`,
},
{
  className: 'loader3',
  div: `<div className="loader3"></div>`,
  css: `.loader3,
    .loader3:before,
    .loader3:after {
      border-radius: 50%;
    }
    .loader3 {
      color: #ffffff;
      font-size: 11px;
      text-indent: -99999em;
      margin: 55px auto;
      position: relative;
      width: 10em;
      height: 10em;
      box-shadow: inset 0 0 0 1em;
      -webkit-transform: translateZ(0);
      -ms-transform: translateZ(0);
      transform: translateZ(0);
    }
    .loader3:before,
    .loader3:after {
      position: absolute;
      content: '';
    }
    .loader3:before {
      width: 5.2em;
      height: 10.2em;
      background: #0E1217;
      border-radius: 10.2em 0 0 10.2em;
      top: -0.1em;
      left: -0.1em;
      -webkit-transform-origin: 5.1em 5.1em;
      transform-origin: 5.1em 5.1em;
      -webkit-animation: load2 2s infinite ease 1.5s;
      animation: load2 2s infinite ease 1.5s;
    }
    .loader3:after {
      width: 5.2em;
      height: 10.2em;
      background: #0E1217;
      border-radius: 0 10.2em 10.2em 0;
      top: -0.1em;
      left: 4.9em;
      -webkit-transform-origin: 0.1em 5.1em;
      transform-origin: 0.1em 5.1em;
      -webkit-animation: load2 2s infinite ease;
      animation: load2 2s infinite ease;
    }
    @-webkit-keyframes load2 {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
    @keyframes load2 {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
    `,
},
{
  className: 'large progress',
  div: `<div className="large progress"><div /></div>`,
  css: `@keyframes spin {
        to { transform: rotate(1turn); }
    }
    
    .progress {
        position: relative;
        display: inline-block;
        width: 5em;
        height: 5em;
        margin: 0 .5em;
        font-size: 12px;
        text-indent: 999em;
        overflow: hidden;
        animation: spin 1s infinite steps(8);
    }
    
    .small.progress {
        font-size: 6px;
    }
    
    .large.progress {
        font-size: 24px;
    }
    
    .progress:before,
    .progress:after,
    .progress > div:before,
    .progress > div:after {
        content: '';
        position: absolute;
        top: 0;
        left: 2.25em; /* (container width - part width)/2  */
        width: .5em;
        height: 1.5em;
        border-radius: .2em;
        background: #eee;
        box-shadow: 0 3.5em #eee; /* container height - part height */
        transform-origin: 50% 2.5em; /* container height / 2 */
    }
    
    .progress:before {
        background: #555;
    }
    
    .progress:after {
        transform: rotate(-45deg);
        background: #777;
    }
    
    .progress > div:before {
        transform: rotate(-90deg);
        background: #999;
    }
    
    .progress > div:after {
        transform: rotate(-135deg);
        background: #bbb;
    }`,
  except1: true,
},
{
  className: 'loader5',
  div: `<div className="loader5"></div>`,
  css: ``,
},
]