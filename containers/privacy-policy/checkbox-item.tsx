const TickIcon = () => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.00025 10.0006C4.73625 10.0006 4.48125 9.89657 4.29325 9.70757L2.29325 7.70757C1.90225 7.31657 1.90225 6.68457 2.29325 6.29357C2.68425 5.90257 3.31625 5.90257 3.70725 6.29357L4.84525 7.43157L8.16825 2.44557C8.47425 1.98557 9.09425 1.86157 9.55525 2.16857C10.0143 2.47557 10.1383 3.09557 9.83225 3.55557L5.83225 9.55557C5.66625 9.80457 5.39625 9.96657 5.09925 9.99557C5.06525 9.99857 5.03325 10.0006 5.00025 10.0006"
        fill="white"
      />
    </svg>
  );
};

type IProps={
    label:string
}
export const CheckboxItem:React.FC<IProps> = ({label}) => {
  return (
    <div className="flex items-center space-x-4">
      <span className="w-4 h-4 flex items-center justify-center rounded-md bg-primary-400">
        <TickIcon />
      </span>

      <span className="flex-1">{label}</span>
    </div>
  );
};
