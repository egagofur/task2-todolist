import { Loading } from ".";

interface ButtonCreateProps {
  handleModal: () => void;
  disabled: boolean;
}

const ButtonCreate: React.FC<ButtonCreateProps> = ({
  handleModal,
  disabled,
}) => {
  return (
    <div className="relative mx-8">
      <button
        disabled={disabled}
        onClick={handleModal}
        className="absolute top-0 w-full py-4 text-xl font-semibold text-gray-100 border buttom-0 rounded-xl font-jakartaPlus bg-primary hover:bg-primary/75"
      >
        {disabled ? (
          <Loading />
        ) : (
          <>
            <span className="mr-4 text-2xl">+</span> Create New
          </>
        )}
      </button>
    </div>
  );
};

export default ButtonCreate;
