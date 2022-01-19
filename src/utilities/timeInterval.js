const timeInterval = (image, y, intervalTime, delay) => {

    setTimeout(() => {

        let x = 0;

        let displayNumberTime = (2 * y) - 1;

        image.classList.toggle('noDisplay');

        let interval = setInterval(() => {

          image.classList.toggle('noDisplay');

          if (++x === displayNumberTime) {
            window.clearInterval(interval);
          }

        }, intervalTime);
      }, delay)
}

export default timeInterval;