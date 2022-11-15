type Props = {
  size?: string | number
}
export const MailIcon: React.FC<Props> = ({ size = 24 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.4" d="M36.6663 26.5693C36.6663 31.2193 32.933 34.9859 28.283 35.0026H28.2663H11.7497C7.11634 35.0026 3.33301 31.2526 3.33301 26.6026V26.5859C3.33301 26.5859 3.34301 19.2093 3.35634 15.4993C3.35801 14.8026 4.15801 14.4126 4.70301 14.8459C8.66301 17.9876 15.7447 23.7159 15.833 23.7909C17.0163 24.7393 18.5163 25.2743 20.0497 25.2743C21.583 25.2743 23.083 24.7393 24.2663 23.7726C24.3547 23.7143 31.278 18.1576 35.298 14.9643C35.8447 14.5293 36.648 14.9193 36.6497 15.6143C36.6663 19.2959 36.6663 26.5693 36.6663 26.5693" fill="#007EA4" />
      <path d="M35.793 9.45667C34.3496 6.73667 31.5096 5 28.383 5H11.7496C8.62298 5 5.78298 6.73667 4.33964 9.45667C4.01631 10.065 4.16964 10.8233 4.70798 11.2533L17.083 21.1517C17.9496 21.8517 18.9996 22.2 20.0496 22.2C20.0563 22.2 20.0613 22.2 20.0663 22.2C20.0713 22.2 20.078 22.2 20.083 22.2C21.133 22.2 22.183 21.8517 23.0496 21.1517L35.4246 11.2533C35.963 10.8233 36.1163 10.065 35.793 9.45667" fill="#007EA4" />
    </svg>
  )
}