// Seeding the forest problem
function seedingForest(num2:number): void {
    if (num2< 1 || num2> 25){
        console.error ("Number must be between 1 and 25");
        return
    }

    for (let i = 0; i < num2; i++){
      console.log("* ".repeat(num2 - i).trim());
    }
}

const num2 = 8
seedingForest(num2)
