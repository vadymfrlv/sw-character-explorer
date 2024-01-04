import { NotificationText } from './Notification.styled';

interface NotificationProps {
  message: string;
}

export const Notification = ({ message }: NotificationProps) => {
  return <NotificationText>{message}</NotificationText>;
};
