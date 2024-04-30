
function printAfter3Sec() {
    setTimeout(() => {
        a = 17;
    }, 3000);
}
console.log(a);
async function myfun(){
    a = await printAfter3Sec;
}
