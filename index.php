<!DOCTYPE html PUBLIC "-W3C//DTD XHTML 1.0 Strict//EN" "http:/www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr_FR" lang="fr_FR">
	<head>
		<meta content="text/html, charset=UTF-8" http-equiv="content-type"/>
                <title>Morpion</title>
                <link rel="stylesheet" href="style/style.css" />
                <script src="script/Jquery.js"></script>
                <script src="script/js.js"></script>
        </head>
    <div>
        <input id="verif" type="hidden" value=""/>
        <table border="1" class="tableau">
            <tr id="a">
                <td id="a-1" value="0"></td>
                <td id="a-2" value="0"></td>
                <td id="a-3" value="0"></td>
            </tr>
            <tr id="b">
                <td id="b-1" value="0"></td>
                <td id="b-2" value="0"></td>
                <td id="b-3" value="0"></td>
            </tr>
            <tr id="c">
                <td id="c-1" value="0"></td>
                <td id="c-2" value="0"></td>
                <td id="c-3" value="0"></td>
            </tr>
        </table>
        <input type="button" id="restart" value="Recommencer"/>
    </div>
</html>