<template>
  <div>
    <svg viewBox="0 0 113 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="showTime">
        <g id="Score">
          <rect
            id="Rectangle 2922"
            x="14.5"
            y="13.5"
            width="97"
            height="29"
            rx="8.5"
            fill="#B1654B"
            stroke="#F8A58D"
            stroke-width="3"
          />
          <foreignObject x="40" y="13.5" width="70" height="29">
            <div class="absolute-center full-width">
              <div id="countTime">{{ `${timeout.min}:${timeout.sec}` }}</div>
            </div>
          </foreignObject>
        </g>
        <g id="Time">
          <g id="bodyTime">
            <line
              id="Line320"
              x1="32.8284"
              y1="41"
              x2="36"
              y2="44.1716"
              stroke="#579340"
              stroke-width="4"
              stroke-linecap="round"
            />
            <line
              id="Line321"
              x1="15.3379"
              y1="41.055"
              x2="12.4927"
              y2="44.5223"
              stroke="#579340"
              stroke-width="4"
              stroke-linecap="round"
            />
            <circle
              id="Ellipse711"
              cx="24"
              cy="28"
              r="16"
              fill="url(#paint0_linear)"
            />
            <circle id="Ellipse710" cx="24" cy="28" r="12" fill="white" />
          </g>
          <g id="bellL">
            <path
              id="Ellipse712"
              d="M17.8722 6.9961C20.0151 10.8599 16.68 12.2313 12.8162 14.3742C8.95234 16.5171 6.02295 18.62 3.88006 14.7562C1.73716 10.8924 3.13225 6.02297 6.99608 3.88008C10.8599 1.73718 15.7293 3.13227 17.8722 6.9961Z"
              fill="#64A74A"
            />
            <path
              id="Ellipse716"
              d="M18.3793 7.90958C19.9641 10.767 17.4976 11.7812 14.6402 13.366C11.7827 14.9507 9.61632 16.5059 8.03156 13.6485C6.44681 10.791 7.47853 7.18991 10.336 5.60516C13.1934 4.0204 16.7946 5.05213 18.3793 7.90958Z"
              fill="#579340"
            />
          </g>
          <g id="bellR">
            <path
              id="Ellipse713"
              d="M43.3119 13.5364C41.6133 17.6151 38.4677 15.8519 34.389 14.1533C30.3103 12.4547 26.843 11.4639 28.5416 7.38517C30.2402 3.30645 34.9236 1.37699 39.0024 3.07559C43.0811 4.77419 45.0105 9.45763 43.3119 13.5364Z"
              fill="#64A74A"
            />
            <path
              id="Ellipse717"
              d="M39.8269 13.0132C38.4912 16.2204 36.0177 14.834 32.8104 13.4984C29.6032 12.1627 26.8767 11.3835 28.2124 8.17627C29.5481 4.96901 33.2309 3.4518 36.4381 4.78748C39.6454 6.12316 41.1626 9.80593 39.8269 13.0132Z"
              fill="#86BA72"
            />
          </g>
          <circle id="Ellipse718" cx="24" cy="28" r="2" fill="#579340" />
          <path
            id="line2"
            d="M24 19.5L24 28"
            stroke="#579340"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            id="line1"
            d="M19.5 28L24 28"
            stroke="#579340"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="24"
          y1="12"
          x2="24"
          y2="44"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#64A74A" />
          <stop offset="1" stop-color="#78AB64" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeout: {
        min: "00",
        sec: "00"
      },
      funcTime: ""
    };
  },
  methods: {
    time() {
      let min = 0;
      let sec = 20;

      this.funcTime = setInterval(() => {
        if (sec == 0) {
          if (min == 0) {
            clearInterval(this.funcTime);
          } else {
            min -= 1;
            sec = 60;
          }
        } else {
          sec--;
        }

        this.timeout.sec = sec < 10 ? "0" + sec : sec;
        this.timeout.min = min < 10 ? "0" + min : min;

        if (this.timeout.min == "00" && this.timeout.sec == 15) {
          let el = document
            .getElementById("countTime")
            .classList.add("fade-in");
        }

        console.log(this.timeout.min);
        console.log(this.timeout.sec);
      }, 1000);
    }
  },
  mounted() {
    this.time();
  }
};
</script>

<style lang="scss" scoped>
#line2 {
  animation: moveCircle 5s linear infinite;
  transform-origin: bottom;
  transform-box: fill-box;
  //   animation-play-state: paused;
}

.fade-in {
  animation: fadein 0.5s linear infinite;
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

#Time {
  animation: shake 0.1s forwards 1s infinite;
  transform-origin: bottom;
  transform-box: fill-box;
}

#Ellipse711,
#Ellipse712,
#Ellipse713,
#Ellipse716,
#Ellipse717,
#Line320,
#Line321,
#line2,
#line1 {
  fill: red;
  stroke: red;
}

@keyframes moveCircle {
  form {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes shake {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(5deg);
  }
  75% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-5deg);
  }
}
</style>
