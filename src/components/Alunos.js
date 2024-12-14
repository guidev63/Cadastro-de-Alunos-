import React from "react";
import Table from 'react-bootstrap/Table';
import './Alunos.css'; 

class Alunos extends React.Component {
    constructor(props) {
        super(props);
       
        this.state = {
            alunos: [
                { id: 1, nome: "João Silva", email: "joao.silva@email.com" },
                { id: 2, nome: "Maria Oliveira", email: "maria.oliveira@email.com" },
                { id: 3, nome: "Carlos Santos", email: "carlos.santos@email.com" }
            ]
        };
    }

    componentDidMount() {
        this.buscarAluno();
    }

    componentWillUnmount() {
        alert("O componente Alunos foi desmontado!!");
    }

    buscarAluno = () => {
        fetch("https://localhost:5001/api/alunos") 
            .then(resposta => resposta.json()) 
            .then(dados => {
                this.setState({ alunos: dados }); 
            })
            .catch(erro => {
                console.error("Erro ao buscar os alunos!!:", erro); 
            });
    }

    deleteAluno(id) {
        fetch("https://localhost:5001/api/alunos" + id, { method: 'DELETE' })
            .then(resposta => {
                if (resposta.ok) {
                    this.buscarAluno();
                }
            });
    }
    
    render() {
        return (
            <Table striped bordered hover className="table">
                <thead>
                    <tr>
                        <th>ID</th> {}
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       
                        this.state.alunos.map((aluno) => (
                            <tr key={aluno.id}>
                                <td>{aluno.id}</td> {}
                                <td>{aluno.nome}</td>
                                <td>{aluno.email}</td>
                                <td>
                                    <button>Atualizar</button>
                                    <button>Excluir</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        );
    }
}

export default Alunos;
