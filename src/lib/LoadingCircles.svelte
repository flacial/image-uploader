<div class="circles__container">
  <div class="circle circle1" />
  <div class="circle circle2" />
  <div class="circle circle3" />
</div>

<style>
  .circles__container {
    display: flex;
    column-gap: 7px;
    justify-content: center;
  }

  .circle {
    width: 19px;
    height: 19px;
    border-radius: 50%;
    background-color: #c7c7ff;
  }

  .circle1, .circle3 {
    animation: jump 0.8s 0.4s ease infinite;
  }

  .circle2 {
    animation: jump 0.8s ease infinite;
  }

  @keyframes jump {
    0% { 
      transform: translate3d(0px, 0px, 0px);
    }

    50% {
      transform: translate3d(0px, -10px, 0px);
    }

    100% { 
      transform: translate3d(0px, 0px, 0px);
    }
  }
</style>
