<HTML>

<HEAD>
    <TITLE>Заявка на получение кредита </TITLE>
</HEAD>

<BODY>
    <B>Заявка на получение кредита</B>
    <BR><BR>
    <?php
        $SalaryAllowance = $_POST['Salary'] / 5;
        $AgeAllowance = ($_POST['Age'] / 10 - ($_POST['Age'] % 10) / 10) - 1;
        $LoanAllowance = $SalaryAllowance * $AgeAllowance;
        echo "Запрашиваемый кредит: $_POST[Loan]<br>";
        echo "Допустимая сумма кредита: $LoanAllowance<br><br>";
        if ($_POST['Loan'] <= $LoanAllowance) echo "Да, $_POST[FirstName]
        $_POST[LastName] , мы удовлетворим Вашу заявку";
        if ($_POST['Loan'] > $LoanAllowance) echo "Извините,
        $_POST[FirstName] $_POST[LastName], в настоящее время мы не можем принять Вашу заявку";
    ?>
</BODY>

</HTML>