using Avalonia;
using Avalonia.Controls;
// using Avalonia.Controls.Primitives;

namespace maui;
public partial class MainWindow : Window
{
    public ButtonCollection ButtonCollection { get; } = new ButtonCollection();
    public Login Login { get; } = new Login();
    public NewsAdmin NewsAdmin { get; } = new NewsAdmin();

    public MainWindow()
    {
        InitializeComponent();
        DataContext = this;
    }

}