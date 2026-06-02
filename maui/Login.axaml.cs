using Avalonia.Controls;
using System.Net.Http;



namespace maui;
public partial class Login : UserControl
{
    private static readonly HttpClient httpClient = new HttpClient();
    public Login()
    {
        InitializeComponent();
        // BindingContext = new LoginViewModel();
        DataContext = new LoginViewModel();
        SubmitButton.Content = "Submit 🌸"; // Set initial button contenst
    }

    public async void OnSubmitClick(object sender, Avalonia.Interactivity.RoutedEventArgs e)
    {
        // Handle the login logic here
        // For example, you can retrieve the password from the TextBox and validate it
        var password = PasswordEntry.Text;
        PasswordEntry.Text = string.Empty; // Clear the password field after retrieving the value
        SubmitButton.Content = "Submitting... 🌸"; // Update button content to indicate submission

        if (string.IsNullOrEmpty(password))
        {
            SubmitButton.Content = "Please enter a password 🌸";
            return;
        }
        var payload = new { password = password };
        var jsonPayload = System.Text.Json.JsonSerializer.Serialize(payload);
        var content = new StringContent(jsonPayload, System.Text.Encoding.UTF8, "application/json");
        var url = "http://192.168.1.61:2000/api/mysql/addpassword";
        try        {
            var res = await httpClient.PostAsync(url, content);
            if (res.IsSuccessStatusCode)
            {
                SubmitButton.Content = "Login successful 🌸";
            }
            else
            {
                // Login failed
                SubmitButton.Content = "Login failed 🌸";
            }
        }
        catch (System.Exception ex)
        {
            SubmitButton.Content = $"Error: {ex.Message} 🌸";
        }
        
        // Console.WriteLine($"Password entered: {password}"); //no thread to run console function on terminal
    }

}