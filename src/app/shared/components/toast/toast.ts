export async function toast(message, toastController) {
    const toast =  await toastController.create({
        message: message,
        duration: 2000
    });
    toast.present();
}