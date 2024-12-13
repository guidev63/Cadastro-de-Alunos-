import React from "react";
import Table from 'react-bootstrap/Table';
import './Alunos.css'; // Importando o CSS

class Alunos extends React.Component {
    constructor(props) {
        super(props);
        // Inicializamos o estado com os dados dos alunos
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
        alert("O componente Alunos foi desmontado!");
    }

    buscarAluno = () => {
        fetch("https://localhost:5001/api/alunos") // Chamando fetch corretamente
            .then(resposta => resposta.json()) // Processando a resposta JSON
            .then(dados => {
                this.setState({ alunos: dados }); // Atualizando o estado corretamente
            })
            .catch(erro => {
                console.error("Erro ao buscar os alunos:", erro); // Tratamento de erros
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
                        <th>ID</th> {/* Coluna ID */}
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // Iterando sobre os alunos e exibindo as informações
                        this.state.alunos.map((aluno) => (
                            <tr key={aluno.id}>
                                <td>{aluno.id}</td> {/* Exibindo o ID */}
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
