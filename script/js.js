$(document).ready(function () {
    var $value = $("#verif").val(); // initialisation de la verification du clic (pour defferentier le x du o)
    // action du clic sur la case
    $("td").click(function () {
        var $value = $("#verif").val();
        // verifier si on a pas deja clicer sur cette case 
        var $contenu = $(this).val();
        if ($contenu == 0)
        {
            if ($value === "ok") // si $value est a ok c'est que le dernier signe afficher est un o
            {
                $(this).css("background", "url(x.jpg) no-repeat");
                $(this).val("x");
                $("#verif").val(""); // reinitialisation de verif
            }
            else
            {
                $(this).css("background", "url(o.jpg) no-repeat");
                $(this).val("o");
                $("#verif").val("ok");
            }
        }
        // recuperation de la valeur de chaque case 
        var $a1 = $("#a-1").val();
        var $a2 = $("#a-2").val();
        var $a3 = $("#a-3").val();
        var $b1 = $("#b-1").val();
        var $b2 = $("#b-2").val();
        var $b3 = $("#b-3").val();
        var $c1 = $("#c-1").val();
        var $c2 = $("#c-2").val();
        var $c3 = $("#c-3").val();
//        verification de victoire
        if($a1 === $a2 && $a2 === $a3 && $a3  === "x" || $b1 === $b2 && $b2 === $b3 && $b3  === "x" || $c1 === $c2 && $c2 === $c3 && $c3  === "x" || $a1 === $b1 && $b1 === $c1 && $c1  === "x" || $a2 === $b2 && $b2 === $c2 && $c2  === "x" || $a3 === $b3 && $b3 === $c3 && $c3  === "x" || $a1 === $b2 && $b2 === $c3 && $c3  === "x" || $a3 === $b2 && $b2 === $c1 && $c1  === "x")
        {
            alert("victoire des x !!");
            location.reload(true);
        }
        else
        {
            if($a1 === $a2 && $a2 === $a3 && $a3  === "o" || $b1 === $b2 && $b2 === $b3 && $b3  === "o" || $c1 === $c2 && $c2 === $c3 && $c3  === "o" || $a1 === $b1 && $b1 === $c1 && $c1  === "o" || $a2 === $b2 && $b2 === $c2 && $c2  === "o" || $a3 === $b3 && $b3 === $c3 && $c3  === "o" || $a1 === $b2 && $b2 === $c3 && $c3  === "o" || $a3 === $b2 && $b2 === $c1 && $c1  === "o")
            {
                alert('victoire des o !!');
                location.reload(true);
            }
        }
    })
    // clic pour redémarrer la partie
    $("#restart").click(function () {
        location.reload(true);
    })
});