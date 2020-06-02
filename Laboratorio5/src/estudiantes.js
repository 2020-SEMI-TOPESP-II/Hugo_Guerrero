module.exports = class Estudiantes {
    constructor() {
        this.sudents = [
            { name: "Hugo Guerrero", id: "8-918-1092", grade: 9.6 },
            { name: "Fulano de Tal", id: "8-918-1091", grade: 10.00 },
        ];
    }


    getAllStudents() {
        try {
            return { data: this.sudents, message: `Lista de estudiantes desplegada con èxito`, error: null };
        }
        catch (e) {
            return { message: `ERROR: ${e}`, error: e };
        }
    }

    createStudent(student) {
        try {
            this.sudents.push(student)
            return { data: [], message: `Estudiante ${student.name} salvado con èxito`, error: null };
        }
        catch (e) {
            return { message: `ERROR: ${e}`, error: e };
        }
    }

    getSpecificStudent(studentID) {
        try {
            let resp = this.sudents.filter((row) => row.id === studentID)
            return { data: resp, message: `Un total de ${resp.length} encontrados`, error: null };
        }
        catch (e) {
            return { message: `ERROR: ${e}`, error: e };
        }
    }

    deleteStudent(studentID) {
        try {
            this.sudents = this.sudents.filter((row) => row.id !== studentID)
            return { data: this.sudents, message: `Se ha borrado con èxito ${studentID}`, error: null };
        }
        catch (e) {
            return { message: `ERROR: ${e}`, error: e };
        }
    }



}
