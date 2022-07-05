export function Tasks() {
  return (
    <div>
      <div>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button> Criar </button>
      </div>
      <div>
        <div>
          <p>Tarafes Criadas</p>
          <p> 5 </p>
        </div>
        <div>
          <p>Concluidas</p>
          <p> 2 de 5 </p>
        </div>
        <div>
          <div>
            <div>
              <input type="checkbox" />
            </div>
            <div>
              {" "}
              <p>
                Integer urna interdum massa libero auctor neque turpis turpis
                semper. Duis vel sed fames integer.{" "}
              </p>
            </div>
            <div> </div>
          </div>
        </div>
      </div>
    </div>
  );
}
