import { Button } from "antd";
import { useState } from "react";
import { ConverterModal } from "./components/ConverterModal/ConverterModal";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <main>
        <Button type="primary" size="large" onClick={() => setShowModal(true)}>
          Открыть конвертер валют
        </Button>
        {showModal && (
          <ConverterModal showModal={showModal} setShowModal={setShowModal} />
        )}
      </main>
    </div>
  );
}

export default App;
