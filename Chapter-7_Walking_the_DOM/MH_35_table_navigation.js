document.addEventListener("DOMContentLoaded", () => {
    let t = document.body.firstElementChild.firstElementChild;
    console.log(t);
    console.log(t.rows);
    // console.log(t.firstElementChild.firstElementChild.cellIndex)
    console.log(t.caption);
    console.log(t.tHead);
    console.log(t.tFoot);
    console.log(t.tBodies);
    console.log(t.rows[1].rowIndex);
    console.log(t.rows[1].sectionRowIndex);
});
