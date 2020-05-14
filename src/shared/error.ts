import { ToastController } from '@ionic/angular';

const toast = new ToastController();

const onToast = async (message: string, color: string = 'success') => {
    const instance = await toast.create({
        message,
        color,
        duration: 2000
    });
    return instance.present();
};

export const onError = async (message: string) => {
    return onToast(message, 'danger');
};

export const onSuccess = async (message: string) => {
    return onToast(message);
};
