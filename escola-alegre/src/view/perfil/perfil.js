import React from "react";
import axios from 'axios';
import MaterialCard from "../../component/card/card";
import Button from '@material-ui/core/IconButton';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { Typography } from "@material-ui/core";
import Rating from '@material-ui/lab/Rating';
import SimpleModal from "../../component/SimpleModal";
import { Link } from "@reach/router";
import MenuBookIcon from '@material-ui/icons/MenuBook';
import WifiIcon from '@material-ui/icons/Wifi';
import PanToolIcon from '@material-ui/icons/PanTool';
import ExtensionIcon from '@material-ui/icons/Extension';

class Perfil extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            escola: [],
            infra: 0,
            alimentacao: 0,
            diversidade: 0,
            motivacao: 0,
            seguranca: 0,
            comunicacao: 0,
            comentario: ''
        }
    }

    componentDidMount() {
        axios({
          url: 'http://172.22.238.199:3000/graphql/',
          method: 'post',
          data: {
            query: `query {
              school(index: ${this.props.index}){
                name
                id
                rate
                location { endereco }
              }
            }`
          },
        }).then((res) => {
            const escola = res.data.data.school;
            return this.setState({ escola });
          });
    }

    handleSubmit = () => {
      const { escola, infra, alimentacao, diversidade, motivacao, seguranca, comunicacao, comentario } = this.state;
      const post = `mutation {
        createRating(
          schoolId: 3,
          alimentacao: ${alimentacao},
          comunicacao: ${comunicacao},
          diversidade: ${diversidade},
          infra: ${infra},
          seguranca: ${seguranca},
          motivacao: ${motivacao},
          comment: "${comentario}",
          tipoPessoa: "pai",
          nome: "Bianca"
        )
        {
          rating
          {
            id
            infra
          }
        }
      }`;

      axios({
        url: 'http://172.22.238.199:3000/graphql/',
        method: 'post',
        data: {
          query: post
        },
      })
      .then((res) => { return true; });
      console.log("escola", JSON.stringify(escola.id));
      console.log(JSON.stringify(post));
    }

    render() {
      const { exibeModal, escola, infra, alimentacao, diversidade, motivacao, seguranca, comunicacao, comentario } = this.state;
      console.log("data", this.state.escola);
        return (
          <MaterialCard perfil key={escola.id} avatar="I" name="Infante Dom Henrique" endereco="R. Gonçalves Dias, 1022" rate={escola["rate"]}>
            <React.Fragment>
              {exibeModal && <SimpleModal />}


              <div style={{ marginLeft: '20%' }}>
                <div>
                  <Typography style={{ fontSize: '20px', fontWeight: 'bold', paddingLeft: '3em' }}>Infraestrutura</Typography>
                  <div>
                    <MenuBookIcon />
                    <Typography style={{ fontWeight: 'normal' }}>Biblioteca</Typography>
                  </div>
                  <div>
                    <WifiIcon />
                    <Typography style={{ fontWeight: 'normal', paddingTop: '0.6em' }}>Internet</Typography>
                  </div>
                </div>
              </div>

              <div style={{ marginLeft: '20%' }}>
                <div>
                  <Typography style={{ fontSize: '20px', fontWeight: 'bold', paddingLeft: '3em' }}>Ensino</Typography>
                  <div>
                    <PanToolIcon />
                    <Typography style={{ fontWeight: 'normal' }}>AEE Libras</Typography>

                  </div>
                  <div>
                    <ExtensionIcon />
                    <Typography style={{ fontWeight: 'normal', paddingTop: '0.6em' }}>Diversidade Socio Cultural</Typography>
                  </div>
                </div>
              </div>

              <div style={{ marginLeft: '20%' }}>
                <div>
                  <Typography style={{ fontSize: '20px', fontWeight: 'bold', paddingLeft: '3em' }}>Avaliações</Typography>
                  <div>
                    <Typography style={{ fontWeight: 'normal' }}>Infraestrutura da escola</Typography>
                    <Rating
                      name="simple-controlled"
                      value={infra}
                      onChange={(event, newValue) => this.setState({ infra: newValue })}
                    />
                  </div>
                  <div>
                    <Typography style={{ fontWeight: 'normal', paddingTop: '0.6em' }}>Alimentação na Escola</Typography>
                    <Rating
                      name="simple-controlled1"
                      value={alimentacao}
                      onChange={(event, newValue) => this.setState({ alimentacao: newValue })}
                    />
                  </div>
                  <div>
                    <Typography style={{ fontWeight: 'normal', paddingTop: '0.6em' }}>Valorização da diversidade</Typography>
                    <Rating
                      name="simple-controlled2"
                      value={diversidade}
                      onChange={(event, newValue) => this.setState({ diversidade: newValue })}
                    />
                  </div>
                  <div>
                    <Typography style={{ fontWeight: 'normal', paddingTop: '0.6em' }}>Motivação do Estudante</Typography>
                    <Rating
                      name="simple-controlled3"
                      value={motivacao}
                      onChange={(event, newValue) => this.setState({ motivacao: newValue })}
                    />
                  </div>
                </div>
                <div style={{ float: 'left' }}>
                  <div>
                    <Typography style={{ fontWeight: 'normal', paddingTop: '0.6em' }}>Segurança na Escola</Typography>
                    <Rating
                      name="simple-controlled4"
                      value={comunicacao}
                      onChange={(event, newValue) => this.setState({ comunicacao: newValue })}
                    />
                  </div>
                  <div>
                    <Typography style={{ fontWeight: 'normal', paddingTop: '0.6em' }}>Comunicação com a Escola</Typography>
                    <Rating
                      name="simple-controlled5"
                      value={seguranca}
                      onChange={(event, newValue) => this.setState({ seguranca: newValue })}
                    />
                  </div>
                  <div style={{ alignSelf: 'center', alignItems: 'center', width: "100%", paddingLeft: '1.6em' }}>
                    <Typography style={{ fontSize: '1.5em', paddingTop: '0.5em' }}>Comentários</Typography>
                  </div>
                  <div style={{ paddingTop: '0.5em', paddingLeft: '1.6em', paddingRight: '0.6em' }}>
                    <TextareaAutosize
                      rowsMax={5}
                      aria-label="maximum height"
                      placeholder="Comente aqui."
                      value={comentario}
                      onChange={event => this.setState({ comentario: event.target.value })}
                    />
                </div>
                <Button variant="contained" color="primary" area-label="ver mais" style={{ marginLeft: '1.6em', fontSize: '16px', border: "solid 1px #600C00", borderRadius: "0" }} onClick={() => this.handleSubmit()}>
                  <Link to={`final`} style={{ textDecoration: 'none', color: "#600C00", fontWeight: 'bold' }}>Enviar Avaliação</Link>
                </Button>
              </div>
              </div>
            </React.Fragment>
          </MaterialCard>
        )
    }
};

export default Perfil;
