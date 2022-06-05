function list() {
    i=1
    swaglord=''
    while (i<=68) {
        swaglord += `<img src=https://cdn.digital.baseballdigest.com/14d77c5e-7118-4975-878a-8bc4eded793f/1d365483-238b-4e2b-8c41-bf2cd06f9234/large/${i}.jpg>\n`
        i+=1
    }
}
list()
document.write(swaglord)

