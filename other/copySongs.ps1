& "C:\Program Files (x86)\WinSCP\WinSCP.com" `
  /log="Z:\feelsetFromServer\WinSCP.log" /ini=nul `
  /script="Z:\feelsetFromServer\script.txt" `
  /parameter= `
  "song.wav" `
    "exit"

$winscpResult = $LastExitCode
if ($winscpResult -eq 0)
{
  Write-Host "Success"
}
else
{
  Write-Host "Error"
}

exit $winscpResult