function list() {
    i=1
    swaglord=''
    while (i<=68) {
        swaglord += `<img src=https://cdn.digital.baseballdigest.com/14d77c5e-7118-4975-878a-8bc4eded793f/484ca1d3-02c4-47bc-9c43-ad26e7dc9db2/large/${i}.jpg>\n`
        i+=1
    }
}
list()
document.write(swaglord)

