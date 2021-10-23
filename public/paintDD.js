function saveImage() {
    html2canvas(document.querySelector("#fullscreen")).then(canvas => {
        fetch('/savepaint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify([{image: canvas.toDataURL()}]),
            })
            .then(response => response.text())
            .then(data => {
            console.log('Success:', data);
            })
            .catch((error) => {
            console.error('Error:', error);
            });
    });
}