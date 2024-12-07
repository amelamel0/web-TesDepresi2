document.getElementById('depression-test-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formElements = event.target.elements;
    let score = 0;

    // Menghitung nilai berdasarkan pilihan
    for (let i = 0; i < 4; i++) {
        const questionName = 'question' + (i + 1);
        const selectedAnswer = formElements[questionName].value;
        score += parseInt(selectedAnswer);
    }

    let resultMessage = '';
    if (score <= 6) {
        resultMessage = 'Hasil tes menunjukkan bahwa Anda tidak menunjukkan gejala depresi yang signifikan. Depresi ini ditandai dengan gejala yang tidak terlalu mengganggu aktivitas sehari-hari. Penderita mungkin merasa sedih, kehilangan minat, atau mudah tersinggung, tetapi masih mampu menjalani kehidupan normal. Gejala ini biasanya bersifat sementara dan dapat mereda dengan sendirinya dalam beberapa hari.';
    } else if (score <= 10) {
        resultMessage = 'Hasil tes menunjukkan gejala ringan depresi. Depresi ringan menunjukkan gejala yang lebih jelas dan berkepanjangan. Penderita mengalami kesulitan dalam beraktivitas, seperti menurun drastisnya motivasi, masalah tidur, dan kesulitan berkonsentrasi. Gejala ini berlangsung lebih lama dan dapat mempengaruhi kualitas hidup secara signifikan. Cobalah berbicara dengan seorang profesional untuk evaluasi lebih lanjut';
    } else {
        resultMessage = 'Hasil tes menunjukkan gejala depresi yang lebih serius. Depresi berat (major depressive disorder) adalah kondisi serius yang mempengaruhi banyak aspek kehidupan. Penderita mengalami gejala intens seperti perasaan putus asa, kehilangan minat yang mendalam, perubahan berat badan drastis, dan pikiran tentang bunuh diri. Diagnosis biasanya melibatkan kriteria tertentu yang harus dipenuhi selama periode waktu tertentu. Sangat disarankan untuk mencari bantuan profesional segera.';
    }

    document.getElementById('result').innerHTML = `<h3>Hasil Tes:</h3><p>${resultMessage}</p>`;
});
