class Student {
    constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
        this.primeiroNome = primeiroNome;
        this.segundoNome = segundoNome;
        this.primeiraNota = primeiraNota;
        this.segundaNota = segundaNota;
    }

    nomeCompleto() {
        return this.primeiroNome + " " + this.segundoNome;
    }

    media() {
        return (this.primeiraNota * 0.4) + (this.segundaNota * 0.4);
    }

    situacao() {
        if (this.media() >= 6)
            alert(this.nomeCompleto() + "\nNota: " + this.media() + "\nAprovado");
        else
            alert(this.nomeCompleto() + "\nNota: " + this.media() + "\nReprovado");
    }
}

student1 = new Student("Rodrigo", "Inoue", 5, 8);
student2 = new Student("Bruno", "Bonnati", 1, 4);
student3 = new Student("Larissa", "Oliveira", 3, 9);
student4 = new Student("Matheus", "Nakano", 10, 10);
student5 = new Student("Rafael", "Neves", 6, 9);

var studentsArray = [student1, student2, student3, student4, student5];

studentsArray.forEach(show);

function show(item) {
    item.situacao();
}