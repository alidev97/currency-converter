import React from "react";
import { Modal } from "antd";
import { Converter } from "./Converter/Converter";

export const ConverterModal = ({ showModal, setShowModal }) => {
  return (
    <Modal
      title={<h1>Конвертер валют</h1>}
      centered
      visible={showModal}
      onCancel={() => setShowModal(false)}
      okText="Закрыть"
      width={1000}
      footer={false}
      maskClosable={false}
    >
      <Converter />
    </Modal>
  );
};
