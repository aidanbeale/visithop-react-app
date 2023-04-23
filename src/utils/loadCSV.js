export default function LoadCSV() {
  return new Promise((resolve, reject) => {

    fetch('https://visithop-cities.s3.ap-southeast-2.amazonaws.com/citylist.csv')
      .then(response => response.body)
      .then(rb => {
        const reader = rb.getReader();

        // https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream
        return new ReadableStream({
          start(controller) {
            function push() {
              reader.read().then(({ done, value }) => {
                if (done) {
                  controller.close();
                  return;
                }
                controller.enqueue(value);
                push();
              });
            }

            push();
          },
        });
        })
      .then((stream) => new Response(stream, { headers: { "Content-Type": "text/html" } }).text())
      .then((result) => {
        let cities = result.split("\n")
          .map((item) => {
            item = item.split(",");
            return {
              name: item[0].replace(/[\r]/g, ''),
              country: item[1].replace(/[\r]/g, ''),
              latitude: item[2].replace(/[\r]/g, ''),
              longitude: item[3].replace(/[\r]/g, ''),
            };
          });
          // Remove first item from array (headers)
          cities.shift();
          resolve(cities);
      });
  });
}
