# Generated by Django 2.2.7 on 2019-11-15 02:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Persona',
            fields=[
                ('id_persona', models.AutoField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=50)),
                ('cedula', models.CharField(max_length=50)),
                ('direccion', models.CharField(max_length=50)),
                ('telefono', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Producto',
            fields=[
                ('id_producto', models.AutoField(primary_key=True, serialize=False)),
                ('descripcion', models.CharField(max_length=50)),
                ('precio', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Rol',
            fields=[
                ('id_rol', models.AutoField(primary_key=True, serialize=False)),
                ('descripcion', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='TipoUsuario',
            fields=[
                ('id_tipousuario', models.AutoField(primary_key=True, serialize=False)),
                ('descripcion', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='ProductoPersona',
            fields=[
                ('id_productoPersona', models.AutoField(primary_key=True, serialize=False)),
                ('id_persona', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Datos.Persona')),
                ('id_producto', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Datos.Producto')),
            ],
        ),
        migrations.AddField(
            model_name='persona',
            name='tipo_rol',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Datos.Rol'),
        ),
        migrations.AddField(
            model_name='persona',
            name='tipo_usuario',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Datos.TipoUsuario'),
        ),
    ]
