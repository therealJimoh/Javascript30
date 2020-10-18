const nodeList = [...document.querySelector('[data-time]')];

const timeSeconds = nodeList
    .map(nodes => nodes.dataset.time)
    .map(timeCode => {
        const [mins, secs] = timeCode.split(':').map(parseFloat);
        return (mins * 60) + secs;
    })
    .reduce((total, vidSecs) => total + vidSecs);

    let secsLeft = seconds;
    const hrs = Math.floor(secsLeft / 3600);
    secsLeft = secsLeft % 3600;

    const hrs = Math.floor(secsLeft / 3600);
    secsLeft = secsLeft % 60;


    console.log(hours, mins, secsLeft);