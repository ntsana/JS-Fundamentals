const size = Number(process.argv[2]);

if (Number.isNaN(size)) {
    console.log('Missing size');
} else {
    let line = '';
    let count = 0;

    while (count < size) {
        line = line + 'X';
        count++;
    }

    let rows = 0;
    while (rows < size) {
        console.log(line);
        rows++;
    }
}
