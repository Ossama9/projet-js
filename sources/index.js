if ('vibrate' in navigator) {
    // Obtenez l'état de la vibration
    const vibrationStatus = navigator.vibrate(0);

    // Si l'état de la vibration est "true", la vibration est activée
    if (vibrationStatus) {
        console.log('La vibration est activée');
    } else {
        console.log('La vibration est désactivée');
    }
} else {
    console.log('La vibration n\'est pas disponible sur ce dispositif');
}