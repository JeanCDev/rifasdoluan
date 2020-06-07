function createNumberBadge() {
    let numbersArea = document.querySelector('#numbers');
    numbersArea.innerHTML = '';

    let availableNumbers = [];
    let selectedNumbers = [];

    for(i=000; i<500; i++){
        availableNumbers.push(i);

        let numbers = document.createElement('button');
        numbers.classList = 'number';
        numbers.id = i;
        numbers.innerHTML = i;
        numbers.onclick = e =>{
            e.preventDefault();
            numbers.classList.toggle('selected');
        
            selectedNumbers.push(numbers.id);

            console.log(numbers.classList = 'selected' ? false : true)

            

            console.log(selectedNumbers);
        };

        numbersArea.append(numbers);
       
    }
    return availableNumbers;

}

createNumberBadge()

function handleSelectedNumbers(event){
    const alreadySelected = selectedNumbers.findIndex(item =>{
        const numberFound = item == numbers.id;
        return numberFound;
    });

    if(alreadySelected >= 0){
        const filteredNumbers = selectedNumbers.filter(item =>{
            const numberIsDiferent = item != numbers.id;
            return numberIsDiferent;
        });

        selectedNumbers = filteredNumbers;
    } else{
        selectedNumbers.push(numbers.id)
    }
}