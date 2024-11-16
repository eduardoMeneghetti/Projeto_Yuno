import '../../assets/style/avisoOk.css';
import avisoIcon from '../../assets/style/icons/icon_submit.png'; 

function AvisoOk() {
  return (
    <div className="aviso-ok">
      <img src={avisoIcon} alt="Ícone de sucesso"/>
      <p>Publicado com sucesso!</p>
    </div>
  );
}

export default AvisoOk;
