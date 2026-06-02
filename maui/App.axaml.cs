using Avalonia;
using Avalonia.Controls.ApplicationLifetimes;
using Avalonia.Markup.Xaml;
using Avalonia.Styling;
using WindowIcon = Avalonia.Controls.WindowIcon;

namespace maui;

public partial class App : Application
{
    public override void Initialize()
    {
        AvaloniaXamlLoader.Load(this);
        // Application.Current.RequestedThemeVariant = ThemeVariant.Light;

    }

    public override void OnFrameworkInitializationCompleted()
    {
        if (ApplicationLifetime is IClassicDesktopStyleApplicationLifetime desktop)
        {
            // this.DataContext = new ButtonCollection();
            desktop.MainWindow = new MainWindow()
            {
                Icon = new WindowIcon(@"C:\Users\ADMIN\source\academic\web-app-next\app\favicon.ico"),
            };
        }

        base.OnFrameworkInitializationCompleted();
    }
}