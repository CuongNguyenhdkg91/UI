using Avalonia.Controls;

namespace maui;

public partial class ButtonCollection : UserControl
{

    public ButtonCollection()
    {
        InitializeComponent();
    }
    
    private void OnButtonClick(object? sender, Avalonia.Interactivity.RoutedEventArgs e)
    {
        var button = sender as Button;
        if (button != null)
        {
            button.Content = "Clicked!";
        }
    }

}