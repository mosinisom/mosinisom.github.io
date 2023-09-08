class MS {
    constructor() {
        this.n = 4;
        this.Matrix = new Array(this.n).fill(0).map(() => new Array(this.n).fill(0));
        this.sum = this.n * (this.n * this.n + 1) / 2 + Math.floor(Math.random() * 21);
        if (this.n === 4) while (this.sum % 4 !== 0) this.sum++;

        if (this.n === 4) {
            let trig;
            do {
                this.Matrix[3][0] = Math.floor(Math.random() * (this.sum / 2));
                this.Matrix[2][0] = Math.floor(Math.random() * ((this.sum - this.Matrix[3][0]) / 2));
                this.Matrix[2][1] = Math.floor(Math.random() * ((this.sum - this.Matrix[3][0]) / 2));
                this.Matrix[0][1] = Math.floor(Math.random() * (this.sum / 4));
                this.Matrix[0][2] = Math.floor(Math.random() * ((this.sum - this.Matrix[0][2]) / 2));
                this.Matrix[1][3] = Math.floor(Math.random() * (this.sum / 4));
                this.Matrix[2][3] = Math.floor(Math.random() * ((this.sum - this.Matrix[1][3]) / 2));

                this.Matrix[1][2] = Math.floor(Math.random() * (this.sum - Math.max(Math.max(this.Matrix[0][2], this.Matrix[1][3]), this.Matrix[2][1])));

                this.Matrix[0][3] = this.sum - this.Matrix[1][2] - this.Matrix[2][1] - this.Matrix[3][0];
                this.Matrix[0][0] = this.sum - this.Matrix[0][1] - this.Matrix[0][2] - this.Matrix[0][3];
                this.Matrix[3][3] = this.sum - this.Matrix[0][3] - this.Matrix[1][3] - this.Matrix[2][3];
                this.Matrix[2][2] = this.sum - this.Matrix[2][1] - this.Matrix[2][0] - this.Matrix[2][3];
                this.Matrix[3][2] = this.sum - this.Matrix[0][2] - this.Matrix[1][2] - this.Matrix[2][2];
                this.Matrix[3][1] = this.sum - this.Matrix[3][0] - this.Matrix[3][2] - this.Matrix[3][3];
                this.Matrix[1][1] = this.sum - this.Matrix[0][1] - this.Matrix[2][1] - this.Matrix[3][1];
                this.Matrix[1][0] = this.sum - this.Matrix[1][1] - this.Matrix[1][2] - this.Matrix[1][3];

                trig = 0;
                for (let i = 0; i < this.n; i++) {
                    for (let j = 0; j < this.n; j++) {
                        for (let k = 0; k < this.n; k++) {
                            for (let p = 0; p < this.n; p++) {
                                if ((this.Matrix[i][j] === this.Matrix[k][p]) && ((i !== k) || (j !== p)) || (this.Matrix[i][j] < 0))
                                    trig = 1;
                            }
                        }
                    }
                }
            } while (trig === 1);
        }
    }

    getMatrix() {
        return this.Matrix;
    }

    getNumber() {
        return this.n;
    }

    getSum() {
        return this.sum;
    }
}

function Solve() {
    let temp = "";
    let A = square.getMatrix();
    for (let i = 0; i < square.getNumber(); i++) {
        for (let j = 0; j < square.getNumber(); j++) {
            temp += A[i][j].toString() + " ";
        }
        temp += "\n";
    }

    document.getElementById("input17").value = temp;
}

function Check() {
    console.log("Check");
    let A = square.getMatrix();

    if (square.getNumber() == 4) {
        if (document.getElementById("input1").value == A[0][0].toString()) document.getElementById("input1").style.color = "green";
        else document.getElementById("input1").style.color = "red";

        if (document.getElementById("input2").value == A[0][1].toString()) document.getElementById("input2").style.color = "green";
        else document.getElementById("input2").style.color = "red";

        if (document.getElementById("input3").value == A[0][2].toString()) document.getElementById("input3").style.color = "green";
        else document.getElementById("input3").style.color = "red";

        if (document.getElementById("input4").value == A[0][3].toString()) document.getElementById("input4").style.color = "green";
        else document.getElementById("input4").style.color = "red";

        if (document.getElementById("input5").value == A[1][0].toString()) document.getElementById("input5").style.color = "green";
        else document.getElementById("input5").style.color = "red";

        if (document.getElementById("input6").value == A[1][1].toString()) document.getElementById("input6").style.color = "green";
        else document.getElementById("input6").style.color = "red";

        if (document.getElementById("input7").value == A[1][2].toString()) document.getElementById("input7").style.color = "green";
        else document.getElementById("input7").style.color = "red";

        if (document.getElementById("input8").value == A[1][3].toString()) document.getElementById("input8").style.color = "green";
        else document.getElementById("input8").style.color = "red";

        if (document.getElementById("input9").value == A[2][0].toString()) document.getElementById("input9").style.color = "green";
        else document.getElementById("input9").style.color = "red";

        if (document.getElementById("input10").value == A[2][1].toString()) document.getElementById("input10").style.color = "green";
        else document.getElementById("input10").style.color = "red";

        if (document.getElementById("input11").value == A[2][2].toString()) document.getElementById("input11").style.color = "green";
        else document.getElementById("input11").style.color = "red";

        if (document.getElementById("input12").value == A[2][3].toString()) document.getElementById("input12").style.color = "green";
        else document.getElementById("input12").style.color = "red";

        if (document.getElementById("input13").value == A[3][0].toString()) document.getElementById("input13").style.color = "green";
        else document.getElementById("input13").style.color = "red";

        if (document.getElementById("input14").value == A[3][1].toString()) document.getElementById("input14").style.color = "green";
        else document.getElementById("input14").style.color = "red";

        if (document.getElementById("input15").value == A[3][2].toString()) document.getElementById("input15").style.color = "green";
        else document.getElementById("input15").style.color = "red";

        if (document.getElementById("input16").value == A[3][3].toString()) document.getElementById("input16").style.color = "green";
        else document.getElementById("input16").style.color = "red";
    }
}


function Generate() {
    console.log("Generate");
    Boxes_reset();
    let k = 0, p;

    document.getElementById("input17").value = "";

    //Генерация матрицы

    square = new MS();
    let M = square.getMatrix();

    //Вывод значений

    if (square.getNumber() == 4) {
        while (k < square.getNumber()) {
            p = Math.floor(Math.random() * 5);
            if (p == 1) document.getElementById("input1").value = M[0][0].toString();
            else document.getElementById("input1").value = "";
            if (p == 2) document.getElementById("input2").value = M[0][1].toString();
            else document.getElementById("input2").value = "";
            if (p == 3) document.getElementById("input3").value = M[0][2].toString();
            else document.getElementById("input3").value = "";
            if (p == 4) document.getElementById("input4").value = M[0][3].toString();
            else document.getElementById("input4").value = "";
            if (p != 0) k++;

            p = Math.floor(Math.random() * 5);
            if (p == 1) document.getElementById("input5").value = M[1][0].toString();
            else document.getElementById("input5").value = "";
            if (p == 2) document.getElementById("input6").value = M[1][1].toString();
            else document.getElementById("input6").value = "";
            if (p == 3) document.getElementById("input7").value = M[1][2].toString();
            else document.getElementById("input7").value = "";
            if (p == 4) document.getElementById("input8").value = M[1][3].toString();
            else document.getElementById("input8").value = "";
            if (p != 0) k++;

            p = Math.floor(Math.random() * 5);
            if (p == 1) document.getElementById("input9").value = M[2][0].toString();
            else document.getElementById("input9").value = "";
            if (p == 2) document.getElementById("input10").value = M[2][1].toString();
            else document.getElementById("input10").value = "";
            if (p == 3) document.getElementById("input11").value = M[2][2].toString();
            else document.getElementById("input11").value = "";
            if (p == 4) document.getElementById("input12").value = M[2][3].toString();
            else document.getElementById("input12").value = "";
            if (p != 0) k++;

            p = Math.floor(Math.random() * 5);
            if (p == 1) document.getElementById("input13").value = M[3][0].toString();
            else document.getElementById("input13").value = "";
            if (p == 2) document.getElementById("input14").value = M[3][1].toString();
            else document.getElementById("input14").value = "";
            if (p == 3) document.getElementById("input15").value = M[3][2].toString();
            else document.getElementById("input15").value = "";
            if (p == 4) document.getElementById("input16").value = M[3][3].toString();
            else document.getElementById("input16").value = "";
            if (p != 0) k++;

        }
    }
}


function Boxes_reset() {
    console.log("Boxes_reset");
    // Цвет клеток
    document.getElementById("input1").style.color = "black";
    document.getElementById("input2").style.color = "black";
    document.getElementById("input3").style.color = "black";
    document.getElementById("input4").style.color = "black";
    document.getElementById("input5").style.color = "black";
    document.getElementById("input6").style.color = "black";
    document.getElementById("input7").style.color = "black";
    document.getElementById("input8").style.color = "black";
    document.getElementById("input9").style.color = "black";
    document.getElementById("input10").style.color = "black";
    document.getElementById("input11").style.color = "black";
    document.getElementById("input12").style.color = "black";
    document.getElementById("input13").style.color = "black";
    document.getElementById("input14").style.color = "black";
    document.getElementById("input15").style.color = "black";
    document.getElementById("input16").style.color = "black";

    // Видимость клеток
    document.getElementById("input1").style.display = "inline";
    document.getElementById("input2").style.display = "inline";
    document.getElementById("input3").style.display = "inline";
    document.getElementById("input4").style.display = "inline";
    document.getElementById("input5").style.display = "inline";
    document.getElementById("input6").style.display = "inline";
    document.getElementById("input7").style.display = "inline";
    document.getElementById("input8").style.display = "inline";
    document.getElementById("input9").style.display = "inline";
    document.getElementById("input10").style.display = "inline";
    document.getElementById("input11").style.display = "inline";
    document.getElementById("input12").style.display = "inline";
    document.getElementById("input13").style.display = "inline";
    document.getElementById("input14").style.display = "inline";
    document.getElementById("input15").style.display = "inline";
    document.getElementById("input16").style.display = "inline";
}